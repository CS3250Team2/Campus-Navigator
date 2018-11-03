import React, { Component } from "react";
import classes from "./LoginReg.css";
import axios from "axios";

class LoginPage extends Component {
    render() {
        return (
            <div className={classes.Login}>
                <div className={classes.Content}>
                    <img
                        className={classes.Logo}
                        src={require("../../assets/images/logo03.png")}
                        alt="Campus Navigator Logo"
                    />
                    <h3>Login</h3>
                    <form>
                        <input placeholder="Enter Username" />
                        <input type="password" placeholder="Enter Password" />
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
