<<<<<<< HEAD
=======
/* Component Name: Modal
 * Function: A popup-style window for the registration/login menus.
 *           Used in conjunction with Backdrop.
 * 
 * Props Received: None
 * 
 */

>>>>>>> origin/rhiller-homepage
import React from 'react';

import classes from './Modal.css';
import Aux from '../../../hoc/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';

<<<<<<< HEAD
const modal = (props) => (
=======
const modal = () => (
>>>>>>> origin/rhiller-homepage
    <Aux>
        <Backdrop />
        <div className={classes.Modal}></div>
    </Aux>
);

export default modal;