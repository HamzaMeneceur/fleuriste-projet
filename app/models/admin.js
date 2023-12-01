const { DataTypes, Model} = require('sequelize');
const sequelize = require('../sequelize');

class Admin extends Model {}

Admin.init({
    firstname:{
        type: DataTypes.STRING(50),
    },
    lastname:{
        type: DataTypes.STRING(50),
    },
    email:{
        type: DataTypes.STRING(50),
        unique: true
    },
    password:{
        type: DataTypes.STRING(50),
        allowNull: false
    }
}, 
{   
    sequelize, 
    tableName:'admin'
});

module.exports = Admin;