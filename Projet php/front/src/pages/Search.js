import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router';
import { Link } from "react-router-dom";
import { SearchProduct } from '../services/products';


const Cartpages = () => {
    const {texte} = useParams();
    
    const [Searchproduct, setSearchproduit] = useState([]);
    useEffect(()=>{
        const fetchData = async() =>{
            const search = await SearchProduct(texte);
            setSearchproduit(search)
            console.log(search);  
        };
        fetchData();
    },[texte]);
  
    return (
        
        <div className="container">
            <h1 className="Ch1">Page de recherche</h1>
            {Searchproduct.length !== 0 && <>
                <div className="row align-items-start">
                    <div className="col-12">                 
                        <table className="table table-dark table-striped ">
                            <thead>
                                <tr>
                                    <th className="text-center">Produit</th>
                                    <th className="text-center">Description</th>
                                    <th className="text-end">Prix</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Searchproduct.map((item, index) => <tr key={`searchproduct-${index}`}>
                                    <td><Link className="Clink" to= {`/product/${item.id}`}>{item.name}</Link></td>
                                    <td className="text-end"><Link className="Clink" to= {`/product/${item.id}`}>{item.description}</Link></td>
                                    <td className="text-end">{item.price}</td>
                                </tr>)}
                            </tbody>
                        </table>
                    </div>
                </div>
            </>}

            {Searchproduct.length === 0 && <>
                <div className="mt-5 alert alert-danger">
                    Il n'y a aucun produit correspondant a votre recherche !
                </div>
                <div className="mt-5 text-center">
                     <Link className="btn btn-danger" to="/products">Ajouter des produits</Link>    
                </div>
            </>}
        </div>
    )
}

export default Cartpages