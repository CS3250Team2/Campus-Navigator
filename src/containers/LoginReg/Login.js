/* Component Name: Login
 * Function: Content for the Login page
 *
 * Props Received: None
 *
 */

import React, { Component } from "react";
import Content from "../Content/Content";

import classes from "./LoginReg.css";

class LoginPage extends Component {
    render() {
        return (
            <div className={classes.Login}>
                <Content title="Login">
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
                </Content>
            </div>
        );
    }
}

export default LoginPage;
