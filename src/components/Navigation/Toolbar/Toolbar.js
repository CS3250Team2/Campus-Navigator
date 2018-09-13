import React from 'react';

import classes from './Toolbar.css';

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <div>LOGO</div>
        <div>MENU</div>
        <div>SOCIAL</div>
    </header>
);

export default toolbar;