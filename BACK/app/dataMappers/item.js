
const { executeRequest } = require('../helper/pgHelper')

const itemDataMappers = {
    async getAll(){
        const sqlQuery = "SELECT * FROM get_all_items();";
        return executeRequest(sqlQuery);
    },
    async getOne(id){
        const sqlQuery = "SELECT * FROM get_one_item($1);";
        const values = [id];
        return executeRequestWithSingleResult(sqlQuery,values);
    },
    async create(category){
        const sqlQuery = "SELECT * FROM create_item($1);";
        const values = [category];
        return executeRequestWithSingleResult(sqlQuery,values);
    },
    async delete(id){
        const sqlQuery = "SELECT * FROM delete_item($1);";
        const values = [id];
        return executeRequestWithSingleResult(sqlQuery,values);
    },
};

module.exports = itemDataMappers;