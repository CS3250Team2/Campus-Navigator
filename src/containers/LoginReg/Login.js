/* Component Name: Login
 * Function: Content for the Login page
 *
 * Props Received: None
 *
 */

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
                        <label for="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            placeholder="Enter Username"
                        />
                        <label for="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Enter Password"
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

export default LoginPage;
