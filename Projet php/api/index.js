const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const routesAuth = require('./routes/auth');
const routesProducsCategory = require('./routes/productCategory');
const routesProducs = require('./routes/products');


const app = express();
const port = 5000;
app.use(cors());
app.use(bodyParser())
app.use('/api/products/',routesProducs);
app.use('/api/products-category/',routesProducsCategory)
app.use('/api', routesAuth)
app.get('/',(req,res)=>{
    res.status(200).send('Hello World');

});
app.listen(port,() => {
    console.log('Server listen on http://localhost:5000');
});