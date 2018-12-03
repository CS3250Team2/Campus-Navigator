/* Component Name: ContactPage
 * Function: Container for the content of contacting the team through Github
 *
 * Props Received: None
 *
 */

import React from 'react';
import Content from '../Content/Content';

import classes from './ContactPage.css';

const ContactPage = () => (
    <Content title="Have Issues or Suggestions?">
        <div className={classes.ContactPage}>
            <a href="https://github.com/CS3250Team2/Campus-Navigator/issues" target="_blank">Contact Us Here</a>
        </div>
    </Content>
);

export default ContactPage;
