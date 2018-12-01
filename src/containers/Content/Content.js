/* Component Name: Content
 * Function: Container for the content of each page
 *
 * Props Received: title - Text below the logo
 *
 */

import React, { Component } from "react";

import classes from './Content.css';

class Content extends Component {
    render() {
        return (
            <div className={classes.Content}>
                <img
                    className={classes.Logo}
                    src={require("../../assets/images/logo03.png")}
                    alt="Campus Navigator Logo"
                />
                <h2>{this.props.title}</h2>
                {this.props.children}
            </div>
        );
    }
}

export default Content;
