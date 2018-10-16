<<<<<<< HEAD
=======
/* Component Name: Toolbar
 * Function: Container for the header of the application,
 *           holds NavItems and RegisterNav
 * 
 * Props Received: None
 * 
 */

>>>>>>> origin/rhiller-homepage
import React from 'react';

import classes from './Toolbar.css';
import NavItems from '../NavItems/NavItems';
import RegisterNav from '../RegisterNav/RegisterNav';

<<<<<<< HEAD
const toolbar = (props) => (
=======
const toolbar = () => (
>>>>>>> origin/rhiller-homepage
    <header className={classes.Toolbar}>
        <div className={classes.NavMenu}>&#9776;</div>
        <NavItems />
        <RegisterNav />
    </header>
);

export default toolbar;