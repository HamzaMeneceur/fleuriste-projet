const { Item, Category } = require('../models');

const itemController = {
    async getAllItems(req,res) {
        try{
        const found = await Item.findAll({include:'categories'});
        res.status(200).json(found);
        }
        catch(error){
            console.log(error);
            res.status(500).json({message:'error serveur go on terminal'})
        }
    },
    async getOneItem(req,res) {
        try{
            const {id} = req.params;
            const found = await Item.findByPk(id, {include:'categories'});
            res.status(200).json(found)
        }
        catch{
            console.log(error);
            res.status(500).json({message:'error serveur go on terminal'});
        }
    },
    async createItem(req,res) {
        try{
            const create = await Item.create({...req.body});
            res.status(201).json(create)
        }
        catch(error){
            console.log(error);
            res.status(500).json({message:'error serveur go on terminal'});
        }
    },
    async deleteItem(req,res){
        try{
            const {id} = req.params;
            const deleting = Item.destroy({where: {id:id}});
            res.status(200).json({message:`This item as been destroy succesfull where number is ${id}`})
        }
        catch(error){
            console.log(error);
            res.status(500).json({message:'error serveur go on terminal'});
        }
    },
    async updateItem(req,res){
        try{
            const {id} = req.params;
            const item = await Item.findByPk(id, {include: 'categories'});
            item.set({...req.body});
            await item.save();
            res.status(200).json(item);
        }
        catch(error){
            console.log(error);
            res.status(500).json({message:'error serveur go on terminal'});

        }
    },
    async linkOfItemCategory(req, res){
        try{
            const {id,catId} = req.params;
            const item = await Item.findByPk(id,{include: 'categories'});
            const category = await Category.findByPk(catId);
            category.addItem(item);
            res.status(200).json(item);
        }
        catch(error){
            console.log(error);
            res.status(500).json({message:'error serveur go on terminal'});
        }
    },
    async deleteOfItemCategory(req,res){
        try{
            const {id,catId} = req.params;
            const item = await Item.findByPk(id,{include: 'categories'});
            const category = await Category.findByPk(catId);
            category.removeItem(item);
            res.status(200).json(item);
        }
        catch(error){
            console.log(error);
            res.status(500).json({message:'error serveur go on terminal'});
        }
    }
};

module.exports = itemController;