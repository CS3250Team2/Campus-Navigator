/* Component Name: SideDrawer
 * Function: Container for the navigation items when the application
 *           is being viewed on a smaller screen.
 *
 * Props Received: None
 *
 */

import React from 'react';

import Aux from '../../../hoc/Auxiliary';
import Backdrop from '../../UI/Backdrop/Backdrop';
import NavItems from '../NavItems/NavItems';

import classes from './SideDrawer.css';

const sideDrawer = props => {
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }
    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed} />
            <div className={attachedClasses.join(' ')}>
                <img
                    className={classes.DrawerLogo}
                    src={require('../../../assets/images/logo02.png')}
                    alt="Campus Navigator Logo"
                />
                <NavItems />
            </div>
        </Aux>
    );
};

export default sideDrawer;
