import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Cart } from '../context/Cart';


const Nav = () =>{
    const [categories,setCategories] = useState([]);
    const getProductCategory = async () => {
        const res = await axios.get('http://localhost:5000/api/products-category/');
        console.log(res);
        setCategories(res.data);
    };
    useEffect(()=>{
        getProductCategory()
    }, []);
    
    const {cart,setCart} = React.useContext(Cart);
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <label class="navbar-brand ">E-commerce</label>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
              <Link class="nav-link" to="/">Home </Link>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="/Login" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Connection
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <l1><Link class="dropdown-item" to="/Login">Login </Link></l1>
                    <l1><Link class="dropdown-item" to="/Register">Register </Link></l1>
                </ul>
              </li>
              <li class="nav-item">
               <Link class="nav-link" to="/products">Produits </Link>
              </li>
              {
                categories.map((category)=>  <li class="nav-item"><Link class="nav-link" key ={`cat-${category.id}`} to = {`/category/${category.id}`}>
                    {category.name}
                </Link></li>
                    
                )
            }

            </ul>
            <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    {cart.length}
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    {cart.map((item)=><li>
                        <a class="dropdown-item" >{item.qty}  {item.product.name}</a>
                    </li>)}
                </ul>
            </div>
            <form class="d-flex">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                <button class="btn btn-outline-light " type="submit">Search</button>
            </form>

          </div>
        </div>
      </nav>
    /*
    <div class="topnav">
        <h5> E-commerce</h5>
        <Link to="/Login">Login </Link>
        <Link to="/Register">Register </Link>
       
    </div>
    */
    )
}
export default Nav