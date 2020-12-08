import React from 'react';

import { GoogleLogin } from 'react-google-login';
// refresh token
import { refreshTokenSetup } from '../utils/refreshToken';

const clientId =
  '6045650641-tq4ukq9d2gmds59t2cv9qnhreae8fkec.apps.googleusercontent.com';

function Login() {
  const onSuccess = (res) => {
    console.log('Login Success: currentUser:', res.profileObj);
    alert(
      `Logged in successfully welcome ${res.profileObj.name}  \n See console for full profile object.`
    );
    refreshTokenSetup(res);
  };

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











// import React from "react";
// import "./Login.css";


// function Login() {
//   return( 
//   <div>
//     <div className="section">
//         <p className="lead">Please Sign in with your Google Account</p>
//     </div>
//     <div className="divider"></div>
//     <div className="section"><a href="/auth/google" className="btn red darken-1">
//             <i className="fab fa-google left" ></i>Login With Google</a></div>
//     </div>
//     );
// }

// export default Login;

