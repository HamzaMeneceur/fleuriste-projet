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
    async deleteItem(req,res,next){
        const {id} = req.params;
        const {error,result} = await itemDataMappers.delete(id);

        manageResponse(res,result,error,next)
    },
    async updateItem(req,res,next){
        const {id} = req.params;
        const item = req.body;
        const {error,result} = await itemDataMappers.update({id,item});

        manageResponse(res,result,error,next)
    },
};

module.exports = itemController;