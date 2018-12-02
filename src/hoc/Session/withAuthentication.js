import React from 'react';

import AuthUserContext from './context';
import { withFirebase } from '../../Firebase';

const withAuthentication = Component => {
    class WithAuthentication extends React.Component {
        constructor(props) {
            super(props);

            this.state = { authUser: null };
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
            return (
                <AuthUserContext.Provider value={this.state.authUser}>
                    <Component {...this.props} />
                </AuthUserContext.Provider>
            );
        }
    }

    return withFirebase(WithAuthentication);
};

export default withAuthentication;
