/* Component Name: Register
 * Function: Content for the Register page
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
    username: '',
    email: '',
    pass1: '',
    pass2: '',
    error: null,
};

class RegisterPage extends Component {
    constructor(props) {
        super(props);

        this.state = { ...INITIAL_STATE };
    }

    onSubmit = event => {
        const { username, email, pass1 } = this.state;

        this.props.firebase
            .doCreateUserWithEmailAndPassword(email, pass1)
            .then(authUser => {
                return this.props.firebase.user(authUser.user.uid).set({ username, email, schedule: [] });
            })
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
        const { username, email, pass1, pass2, error } = this.state;

        const isInvalid =
            pass1 !== pass2 ||
            pass1 === '' ||
            email === '' ||
            username === '' ||
            username.length < 6 ||
            pass1.length < 6;

        return (
            <Content title="Sign Up">
                <div className={classes.Register}>
                    <form onSubmit={this.onSubmit}>
                        <input
                            name="username"
                            value={username}
                            onChange={this.onChange}
                            type="text"
                            placeholder="Create Username"
                        />

                        <input
                            name="email"
                            value={email}
                            onChange={this.onChange}
                            type="email"
                            placeholder="Email Address"
                        />

                        <input
                            name="pass1"
                            value={pass1}
                            onChange={this.onChange}
                            type="password"
                            placeholder="Create Password"
                        />

                        <input
                            name="pass2"
                            value={pass2}
                            onChange={this.onChange}
                            type="password"
                            placeholder="Confirm Password"
                        />

                        <input type="submit" disabled={isInvalid} className={classes.SubmitButton} value="Submit" />

                        {error && <p className={classes.ErrorMessage}>{error.message}</p>}
                    </form>

                    <p className={classes.SignInLink}>
                        Already have an account? <Link to={routes.SIGN_IN}>Sign In</Link>
                    </p>
                </div>
            </Content>
        );
    }
}

export default withRouter(withFirebase(RegisterPage));
