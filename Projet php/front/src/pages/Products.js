import React from 'react';
import { useEffect, useState } from 'react';
import {getProducts} from '../services/products';
import { Link } from 'react-router-dom';
const Products = () => {
    const [products, setProducts] = useState([]);   
    useEffect(()=>{
        const fetchData = async() =>{
            const products = await getProducts();
            setProducts(products);
        };
        fetchData();
    },[]);
    


    return (
        <div className="container">
            
            <h1 className="Pstitre">Liste des produits </h1>
            <div className="row align-items-start Psgroup">
                {products.map((product) =>
                    <div className="card col-4 Pscard ">
                        <div className="card-body  ">
                            <h5 className="card-title Pslabel">
                                <Link className="Pslabel" to={`/product/${product.id}`}>{product.name}</Link>
                                </h5>
                                <div>
                                    <img src={product.picture} alt={product.name} class="Psimage "></img>
                                </div>
                            <div>
                                <p className="card-text Psprice">{product.price} €</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Products;
