import React from 'react';
import { withFirebase } from '../../../../Firebase';

import classes from './SignOutButton.css';

const SignOutButton = ({ firebase }) => (
    <div onClick={firebase.doSignOut} className={classes.SignOutButton}>
        SIGN OUT
    </div>
);

export default withFirebase(SignOutButton);
