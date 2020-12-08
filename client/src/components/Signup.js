import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { Redirect } from "react-router-dom";
import Dashboard from '../pages/Dashboard';

// refresh token
import { refreshTokenSetup } from '../utils/refreshToken';
// import { Switch } from '@material-ui/core';

const clientId =
  '6045650641-tq4ukq9d2gmds59t2cv9qnhreae8fkec.apps.googleusercontent.com';

function Login() {
  
  
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
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        style={{ marginTop: '100px' }}
        isSignedIn={true}
      />
    </div>
  );
}

export default Login;











