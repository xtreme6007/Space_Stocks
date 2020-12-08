import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { Redirect } from "react-router-dom";
import Dashboard from '../pages/Dashboard';
import LandingPage from '../components/LandingPage'
import { refreshTokenSetup } from '../utils/refreshToken';
import "./Login.css";

// refresh token

// import { Switch } from '@material-ui/core';

const clientId =
  '6045650641-tq4ukq9d2gmds59t2cv9qnhreae8fkec.apps.googleusercontent.com';



export default function Login() {
  const onSuccess = (res) => {
    console.log('Login Success: currentUser:', res.profileObj);
    // alert(
    //   `Logged in successfully welcome ${res.profileObj.name}  \n See console for full profile object.`
    // );
    refreshTokenSetup(res);
    console.log("next is the redirect")
 
window.location.replace("/Dashboard")  


}

  const onFailure = (res) => {
    console.log('Login failed: res:', res);
    alert(
      `Was not able to Authenticate`
    );
  };

  return (
    <div className="Login">
  
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        render={renderProps => (
          <button className="gbtn" ><span onClick={renderProps.onClick} disabled={renderProps.disabled} className="btnText">Login</span></button>
        )}
        isSignedIn={true}
      />
    </div>
  );
  
}

