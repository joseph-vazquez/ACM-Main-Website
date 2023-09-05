
import React from "react";
import './ACM_Login.scss';
import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"

 
const ACM_Login = () => {
    const[email, setEmail] = useState();
    const[password, setPassword] = useState();



    const handleRegister = (e) => {
        e.preventDefault();
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) =>  {
            //sighned in
            console.log('Loging Successfully');
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        }) ;

    };
    

    // const handleRegister = async (e) => {
    //     e.preventDefault();
    //     try {
    //     await firebase.auth().signInWithEmailAndPassword(email, password);
    //     console.log('Login Succesfully');
    //     history.push("./admin");
    //             } 
    //     catch (error) {
    //     console.error('Login failed: ', error);
    //     }

    // }


    return(
        <div>
            <div className="header">
                <h1>LOGIN</h1>
                <form onSubmit={handleRegister} className="loginContainer">

                    <label htmlFor="email" className="formText">Email</label>
                    <input type="email" className="textBox" onChange={(e)=>(setEmail(e.target.value))} value={email}/>

                  
                    <label htmlFor="password" className="formText">Password</label>
                    <input type="password" className="textBox" onChange={(e)=>(setPassword(e.target.value))} value={password}/>
                    <button className="btn btn-primary my-2" type="submit">Login</button>
                </form>

            </div>
        </div>

    );

}


export default ACM_Login;