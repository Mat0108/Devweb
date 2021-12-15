import React,{useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import {register} from "../services/auth";
const Register = () => {
    let navigate = useNavigate();
    const [user,setUser] = useState({
        'email':'',
        'cf_email':'',
        'password':'',
        'cf_password':'',
        'firstname':'',
        'lastname':''
    })

    const onClick = async (event) =>{
        event.preventDefault();
        console.log(user);
        if(user.email === user.cf_email && 
            user.password === user.cf_password && 
            user.password.length >= 6 && user.email !== ""){
            const res = await register(user);
            if (res.status === 200)
            {
                navigate("/category/2"); 
            }
            console.log(res);
        }else{
            console.log('erreur sending');
        }
        
    }
    const onChangeHandler = (event) =>{
        const {id,value}= event.target
        setUser({...user,[id]:value})
    }
    return (
        <form onSubmit={onClick}>
            <div class="row Rfoam cardcolor">
                <h2 className="CH1">Creer votre compte</h2>
                <div class="col-2">
                    <label class="Rlabel" for="firstname">Prenom</label>
                </div>
                <div class="col-10">
                    <input type="text" onChange={onChangeHandler} value = {user.firstname} class="form-control Rinput" placeholder="Entrez votre prenom" id="firstname"></input>
                </div>
                <div class="col-2">
                    <label class="Rlabel" for="lastname">Nom</label>
                </div>
                <div class="col-10">
                    <input type="text" onChange={onChangeHandler} value = {user.lastname} class="form-control Rinput" placeholder="Entrez votre nom"  id="lastname"></input>
                </div>
                <div class="col-2">
                    <label class="Rlabel" for="email">Email</label>
                    </div>
                <div class="col-10">
                    <input type="text" onChange={onChangeHandler} value = {user.email} class="form-control Rinput" placeholder="Entrez votre email"  id="email"></input>
                </div>
                <div class="col-2">
                    <label class="Rlabel" for="cf_email">Email</label>
                    </div>
                <div class="col-10">
                    <input type="text" onChange={onChangeHandler} value = {user.cf_email} class="form-control Rinput" placeholder="Rentrez votre email"  id="cf_email"></input>
                </div>
                <div class="col-2">
                    <label class="Rlabel" for="password">Password</label>
                    </div>
                <div class="col-10">
                    <input type="password" onChange={onChangeHandler} value = {user.password} class="form-control Rinput"  placeholder="Entrez votre password"  id="password"></input>
                </div>
                <div class="col-2">
                    <label class="Rlabel" for="cf_password">Password</label>
                </div>
                <div class="col-10">
                    <input type="password" onChange={onChangeHandler} value = {user.cf_password} class="form-control Rinput" placeholder="Rentrez votre password" id="cf_password"></input>
                </div>
                <div >
                    <input class="Rbutton btn btn-succes" type="submit" name = "send" value = "Creation"></input>
                </div>
                <Link to='/Login' class="Rlink">Login</Link>

            </div>
        </form>

    )
}

export default Register;