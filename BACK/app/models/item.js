const { DataTypes, Model} = require('sequelize');
const sequelize = require('../sequelize');

class Item extends Model {}

Item.init({
    img:{
        type: DataTypes.STRING,
        allowNull: false
    },
    price:{
        type: DataTypes.FLOAT,
        allowNull:false
    },
    color:{
        type: DataTypes.STRING(50)
    },
    description:{
        type: DataTypes.TEXT,
        allowNull: false
    }
}, 
{   
    sequelize, 
    tableName:'item'
});

module.exports = Item;