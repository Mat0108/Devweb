let express = require('express');
let router = express.Router();

const product = require('../models/product');

router.get('/', async (req,res) => {
    let products = await product.findAll();
    res.status(200).json(products);
});
    
router.get('/:productId',  async (req,res) => {
    let {productId} = req.params;
    let products = await product.findOne({ where: { id: productId } });
    res.status(200).json(products);
});


module.exports = router;