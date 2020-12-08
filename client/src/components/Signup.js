import React from "react";
import "./Login.css";

function Login() {
  return( 
  <div>
    <div className="section">
        <p className="lead">Create public and private posts</p>
    </div>
    <div className="divider"></div>
    <div className="section"><a href="/auth/google" className="btn red darken-1">
            <i className="fab fa-google left" ></i>Login With Google</a></div>
    </div>
    );
}

export default Login;

