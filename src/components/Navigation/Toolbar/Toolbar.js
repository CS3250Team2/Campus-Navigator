import React from 'react';

import classes from './Toolbar.css';
import NavItems from '../NavItems/NavItems';
import RegisterNav from '../RegisterNav/RegisterNav';

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <NavItems />
        <RegisterNav />
    </header>
);

export default toolbar;