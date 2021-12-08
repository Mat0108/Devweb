const {Sequelize,DataTypes, Model } = require('sequelize');
const sequelize = require('../utils/database');

class user extends Model {};

user.init({
    firstname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastname:{
        type: DataTypes.STRING,
        allowNull: false
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false
    },
    role:{
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    sequelize,
    timestamps:false,
    underscored:true,
    tableName:'user',
    modelName: 'user'
})


module.exports = user;