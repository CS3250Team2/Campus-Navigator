
/* Component Name: NavItem
 * Function: Individual navigation item, used in both NavItems and RegisterNav
 *
 * Props Received: link - where the NavItem will direct to
 *
 */

 import React from 'react';


import classes from './NavItem.css';

const navItem = (props) => (
    <li className={classes.NavItem}>
        <a href={props.link}>{props.children}</a>
    </li>
);

export default navItem;
