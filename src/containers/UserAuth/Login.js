/* Component Name: Login
 * Function: Content for the Login page
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
    email: '',
    password: '',
    error: null,
};

const byPropKey = (propName, value) => () => ({
    [propName]: value,
});

class LoginPage extends Component {
    constructor(props) {
        super(props);

        this.state = { ...INITIAL_STATE };
    }

    onSubmit = event => {
        const { email, password } = this.state;

        const { history } = this.props;

        auth.doSignInWithEmailAndPassword(email, password)
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
        const { email, password, error } = this.state;

        const isInvalid = password === '' || email === '';

        return (
            <div className={classes.Login}>
                <Content title="Login">
                    <form onSubmit={this.onSubmit}>
                        <input
                            value={email}
                            onChange={event => this.setState(byPropKey('email', event.target.value))}
                            type="text"
                            placeholder="Email Address"
                        />
                        <input
                            value={password}
                            onChange={event => this.setState(byPropKey('password', event.target.value))}
                            type="password"
                            placeholder="Password"
                        />
                        <input type="submit" disabled={isInvalid} className={classes.SubmitButton} value="Submit" />

                        {error && <p className={classes.ErrorMessage}>{error.message}</p>}
                    </form>

                    <p className={classes.SignUpLink}>Don't have an account? <Link to={routes.SIGN_UP}>Sign Up</Link></p>
                </Content>
            </div>
        );
    }
}

export default withRouter(LoginPage);
