import React, { Component } from "react";
import "./form.css";

class Login extends Component{
    render(){
        return(

            <div className="app1">
            <div className="main-container">
                <div id="log-in" className="left-container log-in">
                    <h1>Log In</h1>
                    <div Style="width:100%">
                        <form className="signup-form">
                            <input type="email" id="email" placeholder="E-mail" required></input>
                            <input type="password" id="password" placeholder="Password" required></input>
                            <button type="submit" id="signup_submit" className="button sign-up-btn">Login</button>
                        </form>
                    </div>
                    <div className="login-link-container">
                        <p className="login-link">Don't have an account? Click here!</p>
                    </div>
                </div>
                <div className="right-container"></div>
            </div>

            </div>
       )
    }
}

export default Login;