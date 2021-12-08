import React from 'react'
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import { getProduct } from '../services/products';
import { Cart } from '../context/Cart';

const Product = () => {


    const {productId} = useParams();
    const [isLoaded,setIsLoaded] = useState(false);
    const [product,setProduct] = useState({});
    const [qty,setQty] = useState(1);
    const {cart,setCart} = React.useContext(Cart);
    useEffect(()=>{
        const fetchData = async() =>{
            const product = await getProduct(productId);
            setProduct(product);
            setIsLoaded(true);
            
        };
        fetchData();
    },[productId]);

    const onChangeHandler = (event) =>{
        setQty(event.target.value);
    }

    const onSubmitHandler = (event) =>{
        event.preventDefault();
        let find = false;
        const newCart = cart.map((item) => {
            if (item.product && parseInt(item.product.id) === parseInt(productId)) {
                const updatedItem = {
                    ...item,
                    qty: parseInt(qty) + parseInt(item.qty),
                };
                find = true
                return updatedItem;
            }
            return item;
        });

        if (find) {
            setCart(newCart);
        } else {
            setCart([...cart, { qty, product }])
        }
    }
    return (<>
        {!isLoaded && <> Chargement..</>}
        { isLoaded && <div class="card h-100 Pcard">
            
            <>cart:{cart.product}</>
             <div class="card-body ">
                <h5 class="card-title Ptext">{product.name}</h5>
                <div class="row align-items-start card-body">
                    <div class="col-8">
                    <p class="card-text Ptext">{product.description}</p>
                    </div>
                    <img src={product.picture2} alt={product.name} class=" col-3 Pimage" >
                    </img>
                    
                    <form class="row mb-3 col-1" onSubmit={onSubmitHandler}>
                        <div class="col-sm-10">
                             <label className="card-text Pprice">{product.price} € </label>
                
                        </div>
                        <div class="col-sm-10" >
                            <input class="form-control Pinput" onChange={onChangeHandler} value= {qty}type="number" placeholder="0"  ></input>
                        </div>
                        <div className="col-sm-10">
                            <button class="btn btn-outline-light Pbutton "  type="submit">Acheter</button>
                        </div>

                    </form>

                </div>
               
             </div>
    </div>
        }
        </>
    )
}

export default Product
