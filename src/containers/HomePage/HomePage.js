/* Component Name: HomePage
 * Function: Content of the landing page
 *
 * Props Received: None
 *
 */

import React, { Component } from "react";

import classes from "./HomePage.css";

class HomePage extends Component {
    render() {
        return (
            <div className={classes.HomePage}>
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

export default HomePage;
