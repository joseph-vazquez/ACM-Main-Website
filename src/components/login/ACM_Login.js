import firebase from "../professional-events/firebaseConfig";
import React from "react";
import "./ACM_Login.css"
import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


 
const ACM_Login = () => {
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const history = useHistory();

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
        await firebase.auth().signInWithEmailAndPassword(email, password);
        console.log('Login Succesfully');
        history.push("./admin");
                } 
        catch (error) {
        console.error('Login failed: ', error);
        }

    }

    return(
        <div>
            <div className="header">
                <h1 class="m-5 p-5 text-light z-index: 105">LOGIN</h1>
                <form onSubmit={handleRegister} className="loginContainer">

                    <label for="email" className="formText">Email</label>
                    <input name="email" type="email" className="textBox" onChange={(e)=>(setEmail(e.target.value))} value={email}>

                    </input>
                    <label for="password" className="formText">Password</label>
                    <input type="password" name="password" className="textBox" onChange={(e)=>(setPassword(e.target.value))} value={password}>

                    </input>
                    <button class="btn btn-primary my-2" type="submit">Login</button>
                </form>

            </div>
        </div>

    )

}


export default ACM_Login;