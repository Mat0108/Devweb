import React, {useEffect, useState, useContext} from 'react'
import {Link} from 'react-router-dom'

import { Cart } from '../context/Cart'

const Cartpages = () => {
    const {cart, setCart} = useContext(Cart);
    const [totalHT, setTotalHT] = useState(0)
    const [totalTVA, setTotalTVA] = useState(0)
    const [totalTTC, setTotalTTC] = useState(0)

    useEffect(() => {
        let totalHT_tmp = 0
        cart.forEach(item => {
            totalHT_tmp = totalHT_tmp + (item.qty * parseInt(item.product.price))
        })

        let totalTVA_tmp = totalHT_tmp*20/100
        let totalTTC_tmp = totalHT_tmp+totalTVA_tmp

        setTotalHT(totalHT_tmp)
        setTotalTVA(totalTVA_tmp)
        setTotalTTC(totalTTC_tmp+totalTVA)
    }, [])

    return (
        <div className="container">
            <h1 className="Ch1">Page du panier</h1>
            { cart.length !== 0 && <>
                <div className="row align-items-start">
                    <div className="col-9">                 
                        <table className="table table-dark table-striped ">
                            <thead>
                                <tr>
                                    <th className="text-center">Produit</th>
                                    <th className="text-end">Quantité</th>
                                    <th className="text-end">Prix</th>
                                    <th className="text-end">Prix Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart.map((item, index) => <tr key={`cart-${index}`}>
                                    <td><Link className="Clink" to= {`/product/${item.product.id}`}>{item.product.name}</Link></td>
                                    <td className="text-end">{item.qty}</td>
                                    <td className="text-end">{item.product.price}</td>
                                    <td className="text-end" >{parseInt(item.qty) * parseFloat(item.product.price)} €</td>
                                </tr>)}
                            </tbody>
                        </table>
                    </div>
                    <div className="col-3">
                        <table className="table table-dark table-striped ">
                                <thead>
                                    <tr>
                                        <th> </th>
                                        <th className="text-end">Prix</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>

                                        <td className="text-end">Total HT:</td>
                                        <td className="text-end">{totalHT} €</td>
                                    </tr>
                                    <tr>
                                        <td className="text-end">Total TVA:</td>
                                        <td className="text-end">{totalTVA} €</td>
                                    </tr>
                                    <tr>
                                        <td className="text-end">Total TTC:</td>
                                        <td className="text-end">{totalTTC} €</td>
                                    </tr>
                                </tbody>
                            </table>
                    </div>
                </div>
                <div>
                    <div className="text-end">
                        <Link class="btn btn-success" to='/'>Paiement</Link>
                    </div>
                </div>
            </>}

            { cart.length === 0 && <>
                <div className="mt-5 alert alert-danger">
                    Il n'y a aucun produit dans votre panier !
                </div>
                <div className="mt-5 text-center">
                     <Link className="btn btn-danger" to="/products">Ajouter des produits</Link>    
                </div>
            </>}
        </div>
    )
}

export default Cartpages