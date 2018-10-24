import React, { Component } from "react";
import classes from "./Login.css";
import axios from "axios";

class LoginPage extends Component {
    render() {
        return (
            <div className={classes.Login}>
                <div className={classes.Content}>
                    <div className={classes.ImageHeader}>
                        <img
                            src={require("../../assets/images/logo03.png")}
                            alt="Campus Navigator Logo"
                        />
                        <h3>Login</h3>
                    </div>
                    <form>
                        <input placeholder="Enter Username" />
                        <input placeholder="Enter Password" />
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

export default LoginPage;
