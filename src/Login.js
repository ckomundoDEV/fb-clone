import React from 'react'
import './Login.css'
import { Button } from "@material-ui/core";
import { auth, provider } from './firebase'
import { actionTypes } from './Reducer';
import { useStateValue } from './StateProvider';

function Login() {
    const [state, dispatch] = useStateValue();

    const signIn = ()=> {
        auth
            .signInWithPopup(provider)
            .then((result) => {

                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                });
            
            }).catch((error)=> alert(error.message));
    };

    return (
        <div className="login">
            <div className="login__logo">

                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png" alt=""/>

                <img src="https://w7.pngwing.com/pngs/57/824/png-transparent-facebook-f8-business-advertising-company-name-blue-company-text.png" alt=""/>
            </div>
            <Button type="Submit" onClick={signIn}>
                Sign In
            </Button>

        </div>
    )
}

export default Login
