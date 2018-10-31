/* Component Name: App
 * Function: Root component of the application
 *
 * Props Received: None
 *
 */

import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
//import './bootstrap-4.1.3-dist/bootstrap.min.css'

import classes from "./App.css";
import Layout from "./components/Layout/Layout";
import ScheduleUpload from "./containers/ScheduleUpload/ScheduleUpload";
import Register from "./containers/LoginReg/Register";
import Login from "./containers/LoginReg/Login";

class App extends Component {
    render() {
        return (
            <div className={classes.App}>
                <Router>
                    <Layout>
                        <Route path="/" exact component={ScheduleUpload} />
                        <Route path="/register" exact component={Register} />
                        <Route path="/login" exact component={Login} />
                    </Layout>
                </Router>
            </div>
        );
    }
}

export default App;
