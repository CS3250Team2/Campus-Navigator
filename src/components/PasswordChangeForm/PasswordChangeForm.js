import React from 'react';
import {withRouter} from 'react-router-dom';
import { withFirebase } from '../../Firebase';

import classes from '../../containers/PasswordForget/PasswordForget.css';
import * as routes from '../../constants/routes';

const INITIAL_STATE = {
    pass1: '',
    pass2: '',
    error: null,
};

class PasswordChangeForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = { ...INITIAL_STATE };
    }

    onSubmit = event => {
        const { pass1 } = this.state;
        this.props.firebase
            .doPasswordUpdate(pass1)
            .then(() => {
                this.setState({ ...INITIAL_STATE });
                this.props.history.push(routes.HOME);
            })
            .catch(error => {
                this.setState({ error });
            });
    };

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        const { pass1, pass2, error } = this.state;

        const isInvalid = pass1 !== pass2 || pass1 === '';

        return (
            <form onSubmit={this.onSubmit}>
                <input name="pass1" value={pass1} onChange={this.onChange} type="password" placeholder="New Password" />
                <input
                    name="pass2"
                    value={pass2}
                    onChange={this.onChange}
                    type="password"
                    placeholder="Confirm New Password"
                />
                <input type="submit" disabled={isInvalid} className={classes.SubmitButton} value="Change" />
                {error && <p className={classes.ErrorMessage}>{error.message}</p>}
            </form>
        );
    }
}

export default withFirebase(withRouter(PasswordChangeForm));