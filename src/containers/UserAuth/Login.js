/* Component Name: Login
 * Function: Content for the Login page
 *
 * Props Received: History (Router)
 *
 */

import React, { Component } from 'react';
import Content from '../Content/Content';
import { Link, withRouter } from 'react-router-dom';
import { withFirebase } from '../../Firebase';

import classes from './LoginReg.css';
import * as routes from '../../constants/routes';

const INITIAL_STATE = {
    email: '',
    password: '',
    error: null,
};

class LoginPage extends Component {
    constructor(props) {
        super(props);

        this.state = { ...INITIAL_STATE };
    }

    onSubmit = event => {
        const { email, password } = this.state;

        this.props.firebase
            .doSignInWithEmailAndPassword(email, password)
            .then(authUser => {
                this.setState({ ...INITIAL_STATE });
                this.props.history.push(routes.HOME);
            })
            .catch(error => {
                this.setState({ error });
            });

        event.preventDefault();
    };

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        const { email, password, error } = this.state;

        const isInvalid = password === '' || email === '';

        return (
            <div className={classes.Login}>
                <Content title="Login">
                    <form onSubmit={this.onSubmit}>
                        <input
                            name="email"
                            value={email}
                            onChange={event => this.setState(byPropKey('email', event.target.value))}
                            type="text"
                            placeholder="Email Address"
                        />
                        <input
                            name="password"
                            value={password}
                            onChange={event => this.setState(byPropKey('password', event.target.value))}
                            type="password"
                            placeholder="Password"
                        />
                        <input type="submit" disabled={isInvalid} className={classes.SubmitButton} value="Submit" />

                        {error && <p className={classes.ErrorMessage}>{error.message}</p>}
                    </form>

                    <p className={classes.SignUpLink}>
                        Don't have an account? <Link to={routes.SIGN_UP}>Sign Up</Link>
                    </p>
                </Content>
            </div>
        );
    }
}

export default withRouter(withFirebase(LoginPage));
