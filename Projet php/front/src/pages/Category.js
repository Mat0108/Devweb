import React from 'react';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import {getProductByCateroyByName,getCategoryName} from '../services/products';
import { Link } from 'react-router-dom';
const Categorie = () => {
    const {categoriename} = useParams();
    const [products, setProducts] = useState([]);   
    useEffect(()=>{
        const fetchData = async() =>{
            const products = await getProductByCateroyByName(categoriename);
            setProducts(products);
        };

        fetchData();

    },[categoriename]);
    

    const [categories,setCategories] = useState([]);
    useEffect(()=>{
        const getProductCategory = async () => {
            const res = await getCategoryName(categoriename);
            setCategories(res);
        };
        getProductCategory()
    }, [categoriename]);
    
    return (
        <div className="container">
            
        <h1 className="Pstitre">Liste des produits de la categorie {categories}</h1>
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
        /*
        <div>
            <h1>Liste des produits de la categorie {categories}</h1>
            <div className="card-group ">
                {products.map((product) =>
                    <div class="card mb-3">
                    <div className="card-body">
                        <h5 className="card-title">
                            <Link to={`/product/${product.id}`}>{product.name}</Link>
                            </h5>
                        
                        <img class="center" src={product.picture} alt={product.name} ></img>
                        <div class="card-footer">
                            <small class="text-muted">{product.price} €</small>
                         </div>
                        </div>
                </div>
                )}
            </div>
        </div>
        
        */
    )
}

export default Categorie;
