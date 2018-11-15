/* Component Name: Register
 * Function: Content for the Register page
 *
 * Props Received: History (Router)
 *
 */

import React, { Component } from 'react';
import Content from '../Content/Content';
import { Link, withRouter } from 'react-router-dom';
import { auth } from '../../firebase';

import classes from './LoginReg.css';
import * as routes from '../../constants/routes';

const INITIAL_STATE = {
    username: '',
    email: '',
    pass1: '',
    pass2: '',
    error: null,
};

const byPropKey = (propName, value) => () => ({
    [propName]: value,
});

class RegisterPage extends Component {
    constructor(props) {
        super(props);

        this.state = { ...INITIAL_STATE };
    }

    onSubmit = event => {
        const { username, email, pass1 } = this.state;

        const { history } = this.props;

        auth.doCreateUserWithEmailAndPassword(email, pass1)
            .then(authUser => {
                this.setState({ ...INITIAL_STATE });
                history.push(routes.HOME);
            })
            .catch(error => {
                this.setState(byPropKey('error', error));
            });

        event.preventDefault();
    };

    render() {
        const { username, email, pass1, pass2, error } = this.state;

        const isInvalid =
            pass1 !== pass2 ||
            pass1 === '' ||
            email === '' ||
            username === '' ||
            username.length < 6 ||
            pass1.length < 6;

        return (
            <div className={classes.Register}>
                <Content title="Sign Up">
                    <form onSubmit={this.onSubmit}>
                        <input
                            value={username}
                            onChange={event => this.setState(byPropKey('username', event.target.value))}
                            type="text"
                            placeholder="Create Username"
                        />

                        <input
                            value={email}
                            onChange={event => this.setState(byPropKey('email', event.target.value))}
                            type="email"
                            placeholder="Email Address"
                        />

                        <input
                            value={pass1}
                            onChange={event => this.setState(byPropKey('pass1', event.target.value))}
                            type="password"
                            placeholder="Create Password"
                        />

                        <input
                            value={pass2}
                            onChange={event => this.setState(byPropKey('pass2', event.target.value))}
                            type="password"
                            placeholder="Confirm Password"
                        />

                        <input type="submit" disabled={isInvalid} className={classes.SubmitButton} value="Submit" />

                        {error && <p className={classes.ErrorMessage}>{error.message}</p>}
                    </form>

                    <p className={classes.SignInLink}>
                        Already have an account? <Link to={routes.SIGN_IN}>Sign In</Link>
                    </p>
                </Content>
            </div>
        );
    }
}

export default withRouter(RegisterPage);
