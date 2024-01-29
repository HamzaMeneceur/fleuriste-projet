const { DataTypes, Model} = require('sequelize');
const sequelize = require('../sequelize');

class Category extends Model {}

Category.init({
    name:{
        type: DataTypes.STRING(70),
        allowNull: false
    },
    description:{
        type: DataTypes.TEXT
    },
    caracteristique:{
        type: DataTypes.TEXT
    }
}, 
{   
    sequelize, 
    tableName:'category'
});

module.exports = Category;