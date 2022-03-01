let express = require('express');
let router = express.Router();

const product = require('../models/product');
const { Op } = require("sequelize");
router.get('/', async (req,res) => {
    let products = await product.findAll();
    res.status(200).json(products);
});
    
router.get('/:productId',  async (req,res) => {
    let {productId} = req.params;
    let products = await product.findOne({ where: { id: productId } });
    res.status(200).json(products);
});

router.get('/search/:texte', async (req,res) => {
    let {texte} = req.params;
    let product2 = await product.findAll(
        { where: {
             name: { 
                 [Op.substring]: texte
                } 
            } 
        });
    res.status(200).json(product2);
});
module.exports = router;