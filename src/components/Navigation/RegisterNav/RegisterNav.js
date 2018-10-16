/* Component Name: RegisterNav
 * Function: Container for register/login navigation menu,
 *           will dynamically change based on login status.
 *
 * Props Received: None
 *
 */


import React from 'react';
import classes from '../NavItems/NavItems.css';
import NavItem from '../NavItems/NavItem/NavItem';

const registerNav = () => (

    <ul className={classes.NavItems}>
        <NavItem link="/register">REGISTER</NavItem>
        <NavItem link="/login">LOGIN</NavItem>
    </ul>
);

export default registerNav;
