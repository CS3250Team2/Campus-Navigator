/* Component Name: Toolbar
 * Function: Container for the header of the application,
 *           holds NavItems and RegisterNav
 *
 * Props Received: None
 *
 */

import React from 'react';

import classes from './Toolbar.css';
import NavItems from '../NavItems/NavItems';
import RegisterNav from '../RegisterNav/RegisterNav';

const toolbar = () => (
    <header className={classes.Toolbar}>
        <div className={classes.NavMenu}>&#9776;</div>
        <NavItems />
        <RegisterNav />
    </header>
);

export default toolbar;
