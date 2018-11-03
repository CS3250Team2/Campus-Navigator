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
                  <div className="image">
                    <img src={require('../../assets/images/selectCampus.png')} className='center' alt='campus bar'/>
                  </div>
                </div>
            </div>
        );
    }
}

export default HomePage;
