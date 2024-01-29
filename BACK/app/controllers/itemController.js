const { Item, Category } = require('../models');
const {itemDataMappers} = require('../dataMappers');
const { manageResponse } = require('../helper/controllerHelper');

const itemController = {
    async getAllItems(req,res,next) {
        const {error,result} = await itemDataMappers.getAll();

        manageResponse(res,result,error,next)
    },
    async getOneItem(req,res,next) {
            const {id} = req.params;

            const {error,result} = await itemDataMappers.getOne(id);

            manageResponse(res,result,error,next)
    },
    async createItem(req,res,next) {
        const item = req.body

        const {error,result} = await itemDataMappers.create(item);

        manageResponse(res,result,error,next)
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