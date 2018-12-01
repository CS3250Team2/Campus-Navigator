/* Component Name: ContactPage
 * Function: Container for the content of contacting the team through eamil
 *
 * Props Received: None
 *
 */

import React, { Component } from "react";
import UserForm from "../../components/UserForm/UserForm";

import classes from "./ContactPage.css";

class ContactPage extends Component {
    render() {
        return (
            <div className={classes.ContactPage}>
              <div className={classes.Content}>
                <img
                    className={classes.Logo}
                    src={require("../../assets/images/logo03.png")}
                    alt="Campus Navigator Logo"
                />
                <h1>ANY ISSUES OR REQUESTS FOR FUTURE ISSUES?</h1>
                <a href="https://github.com/CS3250Team2/Campus-Navigator/issues">CLICK HERE</a>
              </div>
            </div>
        );
    }
}

export default ContactPage;
