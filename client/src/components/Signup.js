import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Link from "@material-ui/core/Link";
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

