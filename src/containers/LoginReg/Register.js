import React, { Component } from "react";
import classes from "./LoginReg.css";
import axios from "axios";

class RegisterPage extends Component {
    render() {
        return (
            <div className={classes.Register}>
                <div className={classes.Content}>
                    <img
                        className={classes.Logo}
                        src={require("../../assets/images/logo03.png")}
                        alt="Campus Navigator Logo"
                    />
                    <h3>Sign Up</h3>
                    <form>
                        <input placeholder="Create Username" />
                        <input type="password" placeholder="Create Password" />
                        <input type="password" placeholder="Confirm Password" />
                        {/*<div
                            className="g-recaptcha"
                            data-sitekey="6Lc8MHUUAAAAAD8YIzicLlA-pa-8dTN4qFycOLoU"
                        />*/}
                        <input
                            type="submit"
                            className={classes.SubmitButton}
                            value="Submit"
                        />
                    </form>
                </div>
            </div>
        );
    }
}

export default RegisterPage;
