import React,{useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import {login} from "../services/auth";

const Login = () => {
    let navigate = useNavigate();
    //const {userlog,setUserlog} = React.useContext(User);
    // var alertPlaceholder = document.getElementById('liveAlertPlaceholder');
    const [messages,setMessages] = useState([]);
    const [user,setUser] = useState({
        'email':'',
        'password':''
    });
    /*function alert(message, type) {
        var wrapper = document.createElement('div')
        wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'
      
        alertPlaceholder.append(wrapper)
      }*/
    const onClick = async (event) =>{
        event.preventDefault();
        console.log(user);
        setMessages([])
        if(user.password !== "" && user.email !== ""){
            try{
                await login(user);
                setMessages([...messages,{type:"alert alert-success",msg:"vous êtes connecté !"}]);
                
                //navigate("/category/2"); 
            }catch (error){
                if (error.response){
                    setMessages([...messages,{type:"alert alert-danger",msg:error.response.data}]);
                }else{
                    setMessages([...messages,{type:"alert alert-danger",msg:"erreur : "+error.message}]);
                }
            }
        }else{
            setMessages([...messages,{type:"alert alert-info",msg:"merci de remplir les deux champs "}]);
        }
        // alert(message.msg,message.type);
    }
    const onChangeHandler = (event) =>{
        const {id, value}= event.target
        setUser({...user, [id]:value})
    }
    return (
        <div>
            { messages.map(message => <div class={message.type}>
                {message.msg}
            </div> )}
            <form onSubmit={onClick}>
                <div class="row Cfoam cardcolor">
                    <h2 className="CH1">Connection</h2>
                    <div class="col-2">
                        <label class="Clabel" for="email">Email</label></div>
                    <div class="col-10">
                        <input type="text" onChange={onChangeHandler} value={user.email} class="form-control Cinput" placeholder="Entrez votre email "id="email"></input>
                    </div>
                    <div class="col-2">
                        <label class="Clabel" for="password1">Password</label></div>
                    <div class="col-10">
                        <input type="password" onChange={onChangeHandler} value = {user.password} class="form-control Cinput" placeholder="Entrez votre password" id="password"></input>
                    </div>
                    <div class="col-12">
                        <input class="Cbutton" type="submit" name = "send" value = "Connection"></input>
                    </div>
                    <Link to='/Register' class="Clink">Creer votre compte</Link>
                </div>
            </form>
        </div>
    )
}

export default Login;