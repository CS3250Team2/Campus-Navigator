/* Component Name: Toolbar
 * Function: Container for the header of the application,
 *           holds NavItems and RegisterNav
 *
 * Props Received: None
 *
 */

import React from "react";

import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";
import NavItems from "../NavItems/NavItems";
import RegisterNav from "../RegisterNav/RegisterNav";

import classes from "./Toolbar.css";

const toolbar = props => (
    <header className={classes.Toolbar}>
        <NavItems />
        <RegisterNav />
        <DrawerToggle clicked={props.drawerToggleClicked} />
    </header>
);

export default toolbar;
