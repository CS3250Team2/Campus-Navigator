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
import Register from './containers/UserAuth/Register';
import Login from './containers/UserAuth/Login';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import { firebase } from './firebase';

import classes from './App.css';
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
                    <Layout authUser={this.state.authUser}>
                        <Route path={routes.LANDING} exact component={LandingPage} />
                        <Route path={routes.HOME} component={ScheduleUpload} />
                        <Route path={routes.SIGN_UP} component={Register} />
                        <Route path={routes.SIGN_IN} component={Login} />
                    </Layout>
                </Router>
            </div>
        );
    }
}

export default App;
