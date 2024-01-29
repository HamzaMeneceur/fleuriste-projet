const {categoryDataMappers} = require('../dataMappers');
const { manageResponse } = require('../helper/controllerHelper')
const categoryController = {
    async getAllCategories(req,res,next) {
        const {error,result} = await categoryDataMappers.getAll();

        manageResponse(res,result,error,next)

    },
    async getOneCategory(req,res,next) {

            const {id} = req.params;

            const {error,result} = await categoryDataMappers.getOne(id);

            manageResponse(res,result,error,next)
            
    },
    async createCategory(req,res,next) {
        const category = req.body

        const {error,result} = await categoryDataMappers.create(category);

        manageResponse(res,result,error,next)
    },
    async deleteCategory(req,res,next) {
        const {id} = req.params;
        const {error,result} = await categoryDataMappers.delete(id);

        manageResponse(res,result,error,next)
    },
    async updateCategory(req, res,next) {
        const {id} = req.params;
        const category = req.body;
        const {error,result} = await categoryDataMappers.update({id,category});

        manageResponse(res,result,error,next)
    }
};

module.exports = categoryController;