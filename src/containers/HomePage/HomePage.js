/* Component Name: HomePage
 * Function: Container for the content of the landing page
 *
 * Props Received: None
 *
 */

import React, { Component } from "react";
import UserForm from "../../components/UserForm/UserForm";

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
