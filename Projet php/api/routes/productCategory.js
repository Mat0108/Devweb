let express = require('express');
let router = express.Router();

const productCategory = require('../models/productCategory');
const product = require('../models/product');
router.get('/', async (req,res) => {
    let category = await productCategory.findAll();
    res.status(200).json(category);
});
router.get('/:categoryId', async (req,res) => {
    let {categoryId} = req.params;
    let product2 = await product.findAll({ where: { category: categoryId } });
    let category = await productCategory.findAll();
    res.status(200).json(product2);

});
router.get('/name/:categoryId', async (req,res) => {
    let {categoryId} = req.params;
    let product2 = await productCategory.findOne({ where: { id: categoryId } });
    res.status(200).json(product2.name);

});

module.exports = router;