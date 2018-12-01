/* Component Name: App
 * Function: Root component of the application
 *
 * Props Received: None
 *
 */
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import LandingPage from './containers/LandingPage/LandingPage';
import ScheduleUpload from './containers/ScheduleUpload/ScheduleUpload';
import Login from './containers/UserAuth/Login';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import { firebase } from './firebase';
import classes from "./App.css";
import Register from "./containers/UserAuth/Register";
import ContactPage from "./containers/ContactPage/ContactPage";
import FeaturePage from "./containers/FeaturePage/FeaturePage";
import EventPage from "./containers/EventPage/EventPage";
import * as routes from './constants/routes';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            authUser: null,
        };
    }

    componentDidMount() {
        firebase.auth.onAuthStateChanged(authUser => {
            authUser ? this.setState({ authUser }) : this.setState({ authUser: null });
        });
    }

    render() {
        library.add(faUpload);
        return (
            <div className={classes.App}>
                <Router>
                    <Layout>
                        <Route path={routes.LANDING}  exact component={LandingPage} />
                        <Route path={routes.CONTACT} component={ContactPage} />
                        <Route path={routes.FEATURES} component={FeaturePage} />
                        <Route path={routes.SIGN_UP} component={Register} />
                        <Route path={routes.SIGN_IN} component={Login} />
                        <Route path={routes.HOME} component={ScheduleUpload} />                        
                    </Layout>
                </Router>
            </div>
        );
    }
}

export default App;
