import React, { useState } from 'react';
import firebase from './base.js';

const Login = () =>{

    const [user, setUser] = useState("");

    const login = () => {
        let provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(provider).then(result => {
            console.log(result);
            setUser(result)
        });
    }

    return (
        <div>
        { user ? (
            <div>
            <h1>Hello, {user.user.displayName}</h1>
            
            <button>Sign out</button>
            </div>
        ) : (
            
            <button onClick={login}>Login</button>
            
        )}
        </div>
    )
}

export default Login;