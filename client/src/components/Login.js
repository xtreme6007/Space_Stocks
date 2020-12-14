import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { refreshTokenSetup } from '../utils/refreshToken';
import "./Login.css";

const clientId =
  '6045650641-tq4ukq9d2gmds59t2cv9qnhreae8fkec.apps.googleusercontent.com';

//googleOauth brought to you by https://medium.com/javascript-in-plain-english/add-google-login-to-your-react-apps-in-10-mins-c45315c93db0

export default function Login() {
  const onSuccess = (res) => {
    // console.log('Login Success: currentUser:', res.profileObj);
   
    refreshTokenSetup(res);
    // console.log("next is the redirect")
 
window.location.replace("/Dashboard")  


}

  const onFailure = (res) => {
    // console.log('Login failed: res:', res);
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
          <button className="gbtn" onClick={renderProps.onClick} disabled={renderProps.disabled}>Login</button>
        )}
        isSignedIn={true}
      />
    </div>
  );
  
}

