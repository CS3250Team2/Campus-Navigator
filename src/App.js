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
import * as routes from './constants/routes';

class App extends Component {
    render() {
        return (
            <div className={classes.App}>
                <Router>
                    <Layout>
                        <Route path={routes.LANDING}  exact component={LandingPage} />
                        <Route path={routes.CONTACT} component={ContactPage} />
                        <Route path={routes.FEATURES} component={FeaturePage} />
                        <Route path={routes.EVENT} component={EventPage} />
                        <Route path={routes.SIGN_UP} component={Register} />
                        <Route path={routes.SIGN_IN} component={Login} />
                    </Layout>
                </Router>
            </div>
        );
    }
}

export default App;
