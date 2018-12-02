import React from 'react';
import AuthUserContext from './context';
import { withRouter } from 'react-router-dom';
import { withFirebase } from '../../Firebase';

import * as routes from '../../constants/routes';

const withAuthorization = condition => Component => {
    class WithAuthorization extends React.Component {
        componentDidMount() {
            this.listener = this.props.firebase.auth.onAuthStateChanged(
                authUser => {
                    if (!condition(authUser)) {
                        this.props.history.push(routes.SIGN_IN);
                    }
                }
            );
        }

        componentWillUnmount() {
            this.listener();
        }

        render() {
            return (
                <AuthUserContext.Consumer>
                    {authUser =>
                        condition(authUser) ? (
                            <Component {...this.props} />
                        ) : null
                    }
                </AuthUserContext.Consumer>
            );
        }
    }

    return withFirebase(withRouter(WithAuthorization));
};

export default withAuthorization;
