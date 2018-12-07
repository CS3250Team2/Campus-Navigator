/* Component Name: NavItems
 * Function: Container for primary navigation (home, contact, etc.)
 *
 * Props Received: authUser - Authenticated user
 *
 */

import React from 'react';
import Aux from '../../../hoc/Auxiliary';
import NavItem from './NavItem/NavItem';
import SignOutButton from './SignOutButton/SignOutButton';
import { AuthUserContext } from '../../../hoc/Session';

import classes from './NavItems.css';
import * as routes from '../../../constants/routes';

const navItems = () => (
    <Aux>
        <AuthUserContext.Consumer>{authUser => (authUser ? <NavAuth /> : <NavNoAuth />)}</AuthUserContext.Consumer>
    </Aux>
);

const NavAuth = () => (
    <ul className={classes.NavItems}>
        <div className={classes.Navigation}>
            <NavItem link={routes.SCHEDULE}>HOME</NavItem>
            <NavItem link={routes.FEATURES}>FEATURES</NavItem>
            <NavItem link={routes.CONTACT}>CONTACT</NavItem>
        </div>
        <div className={classes.UserAuth}>
            <NavItem link={routes.ACCOUNT}>ACCOUNT</NavItem>
            <SignOutButton />
        </div>
    </ul>
);

const NavNoAuth = () => (
    <ul className={classes.NavItems}>
        <div className={classes.Navigation}>
            <NavItem link={routes.LANDING}>HOME</NavItem>
            <NavItem link={routes.FEATURES}>FEATURES</NavItem>
            <NavItem link={routes.CONTACT}>CONTACT</NavItem>
        </div>
        <div className={classes.UserAuth}>
            <NavItem link={routes.SIGN_UP}>SIGN UP</NavItem>
            <NavItem link={routes.SIGN_IN}>LOGIN</NavItem>
        </div>
    </ul>
);

export default navItems;
