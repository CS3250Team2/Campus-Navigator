import React from 'react';
import Content from '../Content/Content';
import { withAuthorization, AuthUserContext } from '../../hoc/Session';
import { withFirebase } from '../../Firebase';

class AccountPage extends React.Component {
    render() {
        return (
            <AuthUserContext.Consumer>
                {authUser => (
                    <Content title={authUser.username}>
                        <button onClick={null}>Test</button>
                    </Content>
                )}
            </AuthUserContext.Consumer>
        );
    }
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(withFirebase(AccountPage));
