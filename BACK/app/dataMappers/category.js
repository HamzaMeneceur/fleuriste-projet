
const { executeRequest,executeRequestWithSingleResult } = require('../helper/pgHelper')

const categoryDataMappers = {
    async getAll(){
        const sqlQuery = "SELECT * FROM get_all_categories();";
        return executeRequest(sqlQuery);
    },
    async getOne(id){
        const sqlQuery = "SELECT * FROM get_one_category($1);";
        const values = [id];
        return executeRequestWithSingleResult(sqlQuery,values);
    },
    async create(category){
        const sqlQuery = "SELECT * FROM create_category($1);";
        const values = [category];
        return executeRequestWithSingleResult(sqlQuery,values);
    },
    async delete(id){
        const sqlQuery = "SELECT * FROM delete_category($1);";
        const values = [id];
        return executeRequestWithSingleResult(sqlQuery,values);
    },
    async update({id,category}){
        const sqlQuery = "SELECT * FROM update_category($1,$2);";
        const values = [id,category];
        return executeRequestWithSingleResult(sqlQuery,values);
    }
};

module.exports = categoryDataMappers;