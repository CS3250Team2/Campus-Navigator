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
import LandingPage from "./containers/LandingPage/LandingPage";
import Register from "./containers/Register/Register";
import Login from "./containers/Login/Login";
import ContactPage from "./containers/ContactPage/ContactPage";
import FeaturePage from "./containers/FeaturePage/FeaturePage";
import EventPage from "./containers/EventPage/EventPage";

class App extends Component {
    render() {
        return (
            <div className={classes.App}>
                <Router>
                    <Layout>
                        <Route path="/" exact component={LandingPage} />
                        <Route path="/contact" exact component={ContactPage} />
                        <Route path="/features" exact component={FeaturePage} />
                        <Route path="/event" exact component={EventPage} />
                        <Route path="/register" exact component={Register} />
                        <Route path="/login" exact component={Login} />
                    </Layout>
                </Router>
            </div>
        );
    }
}

export default App;
