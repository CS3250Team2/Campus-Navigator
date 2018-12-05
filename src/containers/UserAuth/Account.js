import React from 'react';
import Content from '../Content/Content';
import PasswordChangeForm from '../../components/PasswordChangeForm/PasswordChangeForm';
import { PasswordForgetForm } from '../../containers/PasswordForget/PasswordForget';
import { withAuthorization, AuthUserContext } from '../../hoc/Session';
import { withFirebase } from '../../Firebase';

import classes from './LoginReg.css';

class AccountPage extends React.Component {
    render() {
        return (
            <AuthUserContext.Consumer>
                {authUser => (
                    <Content title={authUser.email}>
                        <div className={classes.Account}>
                            <h3>Rest Password</h3>
                            <PasswordForgetForm />
                            <h3>Change Password</h3>
                            <PasswordChangeForm />
                        </div>
                    </Content>
                )}
            </AuthUserContext.Consumer>
        );
    }
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(withFirebase(AccountPage));
