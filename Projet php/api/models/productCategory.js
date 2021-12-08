const {Sequelize,DataTypes, Model } = require('sequelize');
const sequelize = require('../utils/database');

class productCategory extends Model {}

productCategory.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    sequelize,
    timestamps:false,
    underscored:true,
    tableName:'product_category',
    modelName: 'productCategory'
})

module.exports = productCategory;
