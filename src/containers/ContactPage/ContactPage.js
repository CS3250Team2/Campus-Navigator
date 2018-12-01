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
                <h1>SEND US A MESSAGE</h1>
              </div>
              <div className={classes.Content}>
                <h2>*CLICK ON THE LINK BELOW</h2>
              </div>
              <div className={classes.Content}>
                <a href="https://github.com/CS3250Team2/Campus-Navigator/issues">CONTACT US</a>
              </div>
            </div>
        );
    }
}

export default ContactPage;
