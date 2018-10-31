/* Component Name: HomePage
 * Function: Container for the content of the landing page
 *
 * Props Received: None
 *
 */

import React, { Component } from "react";
import UserForm from "../../components/UserForm/UserForm";

import classes from "./ScheduleUpload.css";

class HomePage extends Component {
    render() {
        return (
            <div className={classes.ScheduleUpload}>
                <div className={classes.Content}>
                    <h1>LET'S GET YOU ON YOUR WAY</h1>
                    <UserForm />
                </div>
            </div>
        );
    }
}

export default HomePage;
