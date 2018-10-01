import React from 'react';

import classes from './NavItems.css';
import NavItem from './NavItem/NavItem';

const navItems = () => (
    <ul className={classes.NavItems}>
        <NavItem>HOME</NavItem>
        <NavItem>MEDIA</NavItem>
        <NavItem>TEAM</NavItem> 
        <NavItem>CONTACT</NavItem>
    </ul>
);

export default navItems;