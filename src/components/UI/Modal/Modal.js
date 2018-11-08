
/* Component Name: Modal
 * Function: A popup-style window for the registration/login menus.
 *           Used in conjunction with Backdrop.
 *
 * Props Received: None
 *
 */

import React from 'react';

import classes from './Modal.css';
import Aux from '../../../hoc/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';


const modal = () => (
    <Aux>
        <Backdrop />
        <div className={classes.Modal}></div>
    </Aux>
);

export default modal;
