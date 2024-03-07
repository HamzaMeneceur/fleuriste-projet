
const { executeRequest,executeRequestWithSingleResult } = require('../helper/pgHelper')

const categoryDataMappers = {
    async getAll(){
        const sqlQuery = "SELECT * FROM category;";
        return executeRequest(sqlQuery);
    },
    async getOne(id){
        const sqlQuery = `
                        SELECT c.id as category_id,c.name,c.description as "description category",c.caracteristique,i.label,i.id as item_id
                        FROM category c
                        JOIN item i ON c.id = i.id
                        WHERE c.id = $1;`;
        const values = [id];
        return executeRequestWithSingleResult(sqlQuery,values);
    },
    async create(category){
        const {name,description,caracteristique} = category
        const sqlQuery = `
                        INSERT INTO category (name,description,caracteristique,created_at)
                        VALUES ($1,$2,$3,now());`;
        const values = [name,description,caracteristique];
        return executeRequestWithSingleResult(sqlQuery,values);
    },
    async delete(id){
        const sqlQuery = `
                        DELETE FROM category
                        WHERE id = $1;`;
        const values = [id];
        return executeRequestWithSingleResult(sqlQuery,values);
    },
    async update({id,category}){
        const {name,description,caracteristique} = category
        const sqlQuery = `
                        UPDATE category
                        SET name = $1,
                            description = $2
                            caracteristique = $3
                            updated_at = now();
                        WHERE id = $4`;
        const values = [name,description,caracteristique,id];
        return executeRequestWithSingleResult(sqlQuery,values);
    }
};

module.exports = categoryDataMappers;