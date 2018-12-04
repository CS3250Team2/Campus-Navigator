/* Component Name: ScheduleUpload
 * Function: Content of the schedule upload page
 *
 * Props Received: None
 *
 */

import React from 'react';
import Content from '../Content/Content';
import UserForm from '../../components/UserForm/UserForm';
import { withAuthorization } from '../../hoc/Session';

import classes from './ScheduleUpload.css';

const HomePage = () => (
    <Content title="Let's Get You On Your Way">
        <UserForm />
    </Content>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(HomePage);
