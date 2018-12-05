import React from 'react';
import Content from '../Content/Content';
import { withRouter } from 'react-router-dom';
import { withFirebase } from '../../Firebase';

import classes from './PasswordForget.css';
import * as routes from '../../constants/routes';

const PasswordForget = () => (
    <Content title="Forgot Your Password?">
        <PasswordForgetForm />
    </Content>
);

const INITIAL_STATE = {
    email: '',
    error: null,
};

class PasswordForgetFormBase extends React.Component {
    constructor(props) {
        super(props);

        this.state = { ...INITIAL_STATE };
    }

    onSubmit = event => {
        const { email } = this.state;

        this.props.firebase
            .doPasswordReset(email)
            .then(() => {
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
        const { email, error } = this.state;
        const isInvalid = email === '' || email.indexOf('@') === -1;

        return (
            <div className={classes.PasswordForget}>
                <form onSubmit={this.onSubmit}>
                    <input
                        name="email"
                        value={this.state.email}
                        onChange={this.onChange}
                        type="text"
                        placeholder="Email Address"
                    />
                    <input type="submit" disabled={isInvalid} className={classes.SubmitButton} value="Reset" />
                    {error && <p className={classes.ErrorMessage}>{error.message}</p>}
                </form>
            </div>
        );
    }
}

export default PasswordForget;

const PasswordForgetForm = withFirebase(withRouter(PasswordForgetFormBase));

export { PasswordForgetForm };
