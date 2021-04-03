import React, { Component } from "react";
import "./form.css";

class Signup extends Component{
    render(){
        return(
            <div className="app1">
            <div className="main-container">
                <div id="sign-up" className="left-container sign-up">
                    <h1>So let's sign up</h1>
                    <div Style="width:100%">
                        <form className="signup-form">
                            <input type="text" id="first-name" placeholder="First Name"></input>
                            <input type="text" id="last-name" placeholder="Last Name"></input>
                            <input type="email" id="email" placeholder="E-mail"></input>
                            <input type="password" id="password" placeholder="Password"></input>
                            <div className="check">
                                <input type="checkbox" id="agree-terms"></input>
                                <label for="agree-terms">Agree to
                                    {/* <a href="#">Terms &amp; Conditions</a> */}
                                </label>
                            </div>
                            <button type="submit" id="signup_submit" className="button sign-up-btn disabled" disabled>Sign Up</button>
                        </form>
                    </div>
                    <div className="signin-link-container">
                        <p className="signin-link">ALready have an account? Click here!</p>
                    </div>
                </div>
                <div className="right-container"></div>
            </div>

            </div>
       )
    }
}

export default Signup;