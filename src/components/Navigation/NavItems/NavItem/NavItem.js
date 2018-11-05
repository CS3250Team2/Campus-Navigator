
/* Component Name: NavItem
 * Function: Individual navigation item, used in both NavItems and RegisterNav
 *
 * Props Received: link - where the NavItem will direct to
 *
 */

 import React from 'react';
 import { Link } from 'react-router-dom';


import classes from './NavItem.css';

const navItem = (props) => (
    <li className={classes.NavItem}>
        <Link to={props.link}>{props.children}</Link>
    </li>
);

export default navItem;
