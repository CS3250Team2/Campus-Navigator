import React from 'react';

import classes from './NavItems.css';
import NavItem from './NavItem/NavItem';

const navItems = () => (
    <ul className={classes.NavItems}>
        <NavItem link="/">HOME</NavItem>
        <NavItem link="/media">MEDIA</NavItem>
        <NavItem link="/team">TEAM</NavItem>
        <NavItem link="/contact">CONTACT</NavItem>
    </ul>
);

export default navItems;