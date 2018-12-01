import React from 'react';
import { auth } from '../../../../firebase';

import classes from './SignOutButton.css';

const SignOutButton = () => (
    <div onClick={auth.doSignOut} className={classes.SignOutButton}>
        SIGN OUT
    </div>
);

export default SignOutButton;
