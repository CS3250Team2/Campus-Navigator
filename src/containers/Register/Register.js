import React, { Component } from "react";
import classes from "./Register.css";
import axios from "axios";

class RegisterPage extends Component {
    render() {
        return (
            <div className={classes.Register}>
                <div className={classes.Content}>
                    <div className={classes.ImageHeader}>
                        <img
                            src={require("../../assets/images/logo03.png")}
                            alt="Campus Navigator Logo"
                        />
                        <h3>Sign Up</h3>
                    </div>
                    <form>
                        <input placeholder="Create Username" />
                        <input placeholder="Create Password" />
                        <input placeholder="Confirm Password" />
                        <div
                            className="g-recaptcha"
                            data-sitekey="6Lc8MHUUAAAAAD8YIzicLlA-pa-8dTN4qFycOLoU"
                        />
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
