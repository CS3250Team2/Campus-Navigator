import React from 'react';

import classes from '../NavItems/NavItems.css';
import NavItem from '../NavItems/NavItem/NavItem';

const registerNav = (props) => (
    <ul className={classes.NavItems}>
        <NavItem>REGISTER</NavItem>
        <NavItem>LOGIN</NavItem>
    </ul>
);

export default registerNav;