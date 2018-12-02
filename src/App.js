/* Component Name: App
 * Function: Root component of the application
 *
 * Props Received: None
 *
 */
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import { firebase } from './firebase';
import Layout from './components/Layout/Layout';
import LandingPage from './containers/LandingPage/LandingPage';
import ScheduleUpload from './containers/ScheduleUpload/ScheduleUpload';
import Register from './containers/UserAuth/Register';
import Login from './containers/UserAuth/Login';
import ContactPage from './containers/ContactPage/ContactPage';
import FeaturePage from './containers/FeaturePage/FeaturePage';
import EventPage from './containers/EventPage/EventPage';
import { withFirebase } from './Firebase';

import * as routes from './constants/routes';
import classes from './App.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            authUser: null,
        };
    }

    componentDidMount() {
        this.listener = this.props.firebase.auth.onAuthStateChanged(authUser => {
            authUser ? this.setState({ authUser }) : this.setState({ authUser: null });
        });
    }

    componentWillUnmount() {
        this.listener(); //Removes the authentication listener when the App is unmounted to prevent memory leaks
    }

    render() {
        library.add(faUpload);
        return (
            <div className={classes.App}>
                <Router>
                    <Layout authUser={this.state.authUser}>
                        <Route path={routes.LANDING} exact component={LandingPage} />
                        <Route path={routes.HOME} component={ScheduleUpload} />
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

export default withFirebase(App);
