const {Sequelize,DataTypes, Model } = require('sequelize');
const sequelize = require('../utils/database');

class product extends Model {}

product.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    picture: {
        type: DataTypes.STRING,
        allowNull: false
    },
    picture2: {
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    sequelize,
    timestamps:false,
    underscored:true,
    tableName:'product',
    modelName: 'product'
})

module.exports = product;
