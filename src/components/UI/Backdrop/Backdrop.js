
/* Component Name: Backdrop
 * Function: Places a semi-transparent black overlay over the viewport
 *           for a "dimming" effect. Used in conjunction with Modal
 *
 * Props Received: show - Determines if the modal/backdrop should be visible.
 *
 */

import React from 'react';

import classes from './Backdrop.css';

const backdrop = (props) => (
    props.show ? <div className={classes.Backdrop}></div> : null
);

export default backdrop;
