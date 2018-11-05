/* Component Name: ScheduleUpload
 * Function: Content of the schedule upload page
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
                    <img
                        className={classes.Logo}
                        src={require("../../assets/images/logo03.png")}
                        alt="Campus Navigator Logo"
                    />
                    <h3>LET'S GET YOU ON YOUR WAY</h3>
                    <UserForm />
                </div>
            </div>
        );
    }
}

export default HomePage;
