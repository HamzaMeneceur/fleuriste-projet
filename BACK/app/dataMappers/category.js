
const { executeRequest } = require('../helper/pgHelper')

const categoryDataMappers = {
    async getAll(){
        const sqlQuery = "SELECT * FROM get_all_categories();";
        return executeRequest(sqlQuery);
    }
};

module.exports = categoryDataMappers;