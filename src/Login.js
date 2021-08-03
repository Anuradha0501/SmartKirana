import React from 'react'
import './css_files/Login.css'
import { Link } from 'react-router-dom'
import logo from './logo.png';

function Login(){

    return(
        <div className="login">
            <Link>
                <img className="login__logo" 
                src={logo} alt="" />
            </Link>
            <div className="login__container">
                <h1>Sign In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="email"/>
                    <h5>Password</h5>
                    <input type="password"/>
                    <button type="submit" className="login__signInButton">Sign In</button>
                </form>
                <p>By signing-in, your agree to Smart Kirana's Terms and Conditions</p>
                <button className="login__registerButton">Create Your Account</button>
            </div>
        </div>
    )

}

export default Login;