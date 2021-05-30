import { Button } from '@material-ui/core'
import React from 'react'
import { auth, provider } from './firebase'

import './login.css'
function login() {

    const signIn = () => {
        auth.signInWithPopup(provider).catch((error) => alert(error.massage));
    };
    return (
        <div className="login">
            <div className="login_logo">
                <img style={{ width: "400px" }} src="https://image.freepik.com/free-vector/talk-show-concept-illustration_202358-51.jpg" />
                <h1 className='ms-3 mb-3 text-center text-danger'>TALKEPOCH</h1>
                <Button onClick={signIn}>Sign In with Google</Button>
            </div>
            
        </div>
    );
}

export default login;