/* Component Name: App
 * Function: Root component of the application
 *
 * Props Received: None
 *
 */
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import Layout from './components/Layout/Layout';
import LandingPage from './containers/LandingPage/LandingPage';
import ScheduleUpload from './containers/ScheduleUpload/ScheduleUpload';
import Register from './containers/UserAuth/Register';
import Login from './containers/UserAuth/Login';
import Account from './containers/UserAuth/Account';
import ContactPage from './containers/ContactPage/ContactPage';
import FeaturePage from './containers/FeaturePage/FeaturePage';
import EventPage from './containers/EventPage/EventPage';
import CampusMap from './components/CampusMap/CampusMap';
import CampusMapOld from './components/CampusMap/CampusMapOld';
import PasswordForget from './containers/PasswordForget/PasswordForget';

import * as routes from './constants/routes';
import classes from './App.css';
import { withAuthentication } from './hoc/Session';

const App = () => {
    library.add(faUpload);
    return (
        <div className={classes.App}>
            <Router>
                <Layout>
                    <Route path={routes.LANDING} exact component={LandingPage} />
                    <Route path={routes.HOME} component={ScheduleUpload} />
                    <Route path={routes.CONTACT} component={ContactPage} />
                    <Route path={routes.FEATURES} component={FeaturePage} />
                    <Route path={routes.EVENTS} component={EventPage} />
                    <Route path={routes.SIGN_UP} component={Register} />
                    <Route path={routes.SIGN_IN} component={Login} />
                    <Route path={routes.ACCOUNT} component={Account} />
                    <Route path={routes.SCHEDULE} component={CampusMapOld} />
                    <Route path={routes.PASS_FORGET} component={PasswordForget} />
                </Layout>
            </Router>
        </div>
    );
};

export default withAuthentication(App);
