/* Component Name: ScheduleUpload
 * Function: Content of the schedule upload page
 *
 * Props Received: None
 *
 */

import React, { Component } from "react";
import Content from "../Content/Content"
import UserForm from "../../components/UserForm/UserForm";

import classes from "./ScheduleUpload.css";

class HomePage extends Component {
    render() {
        return (
            <div className={classes.ScheduleUpload}>
                <Content title="Let's Get You On Your Way">
                    <UserForm />
                </Content>
            </div>
        );
    }
}

export default HomePage;
