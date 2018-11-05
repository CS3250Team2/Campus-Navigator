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
import HomePage from "./containers/HomePage/HomePage";
import ScheduleUpload from "./containers/ScheduleUpload/ScheduleUpload";
import Register from "./containers/LoginReg/Register";
import Login from "./containers/LoginReg/Login";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUpload } from "@fortawesome/free-solid-svg-icons";

class App extends Component {
    render() {
        library.add(faUpload);
        return (
            <div className={classes.App}>
                <Router>
                    <Layout>
                        <Route path="/" exact component={HomePage} />
                        <Route path="/upload" component={ScheduleUpload} />
                        <Route path="/register" component={Register} />
                        <Route path="/login" component={Login} />
                    </Layout>
                </Router>
            </div>
        );
    }
}

export default App;
