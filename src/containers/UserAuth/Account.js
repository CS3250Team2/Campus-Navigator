import React from 'react';
import Content from '../Content/Content';
import { withAuthorization, AuthUserContext } from '../../hoc/Session';

const AccountPage = () => (
    <AuthUserContext.Consumer>
        {authUser => (
            <Content title={authUser.username}>
                <p>Test</p>
            </Content>
        )}
    </AuthUserContext.Consumer>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(AccountPage);
