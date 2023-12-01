const { Item } = require('../models');
const { findByPk } = require('../models/admin');

const itemController = {
    async getAllItems(req,res) {
        try{
        const found = Item.findAll({include:'categories'});
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
            const found = Item.findByPk(id, {include:'categories'});
            res.status(200).json(found)
        }
        catch{
            console.log(error);
            res.status(500).json({message:'error serveur go on terminal'});
        }
    }
};

module.exports = itemController;