/* Component Name: LandingPage
 * Function: Content of the landing page
 *
 * Props Received: None
 *
 */

import React, { Component } from "react";

import classes from "./LandingPage.css";

class LandingPage extends Component {
    render() {
        return (
            <div className={classes.LandingPage}>
                <div className={classes.Content}>
                    <img
                        src={require('../../assets/images/selectCampus.png')}
                        alt='campus bar'
                    />
                </div>
            </div>
        );
    }
}

export default LandingPage;
