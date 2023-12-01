const { Category } = require('../models');

const categoryController = {
    async getAllCategories(req,res) {
        try{
            const found = await Category.findAll();
            res.status(200).json(found)
        }
        catch(error){
            console.log(error);
            res.status(500).json({message:'error serveur go on terminal'})
        }
    },
    async getOneCategory(req,res) {
        try{
            const {id} = req.params;
            const found = await Category.findByPk(id);
            res.status(200).json(found);
        }
        catch(error){
            console.log(error);
            res.status(500).json({message:'error serveur go on terminal'})
        }
    },
    async createCategory(req,res) {
        try{
            const create = await Category.create({...req.body});
            res.status(201).json(create)
        }
        catch(error){
            console.log(error)
            res.status(500).json({message:'error serveur go on terminal'})
        }
    },
    async deleteCategory(req,res) {
        try{
            const {id} = req.params;
            const deleting = await Category.destroy({where: {id: id}});
            res.status(200).json({message:`This category as been destroy succesfull where number is ${id}`})
        }
        catch(error){
            console.log(error);
            res.status(500).json({message:'error serveur go on terminal'})
        }
    },
    async updateCategory(req, res) {
        try{
            const {id} = req.params;
            const category = await Category.findByPk(id);
            category.set({...req.body});
            await category.save()
            res.status(200).json(category);
        }
        catch(error){
            console.log(error);
            res.status(500).json({message:'error serveur go on terminal'})

        }
    }
};

module.exports = categoryController;