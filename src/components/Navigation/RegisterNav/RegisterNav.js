import React from 'react';

import classes from '../NavItems/NavItems.css';
import NavItem from '../NavItems/NavItem/NavItem';

const registerNav = (props) => (
    <ul className={classes.NavItems}>
        <NavItem link="/register">REGISTER</NavItem>
        <NavItem link="/login">LOGIN</NavItem>
    </ul>
);

export default registerNav;