import React from 'react';
import { Link } from 'react-router-dom';
import Content from '../Content/Content';

import classes from './FeaturePage.css';
import * as routes from '../../constants/routes';

const FeaturePage = () => (
    <Content title="Click the Links Below to Check Out Our Features">
        <div className={classes.FeaturePage}>
            <Link to={routes.HOME}>Upload a Schedule</Link>
            <Link to={routes.SCHEDULE}>Your Day's Route</Link>
            <Link to={routes.EVENTS}>Events</Link>
        </div>
    </Content>
);


export default FeaturePage;
