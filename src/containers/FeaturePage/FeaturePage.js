import React from 'react';
import { Link } from 'react-router-dom';
import Content from '../Content/Content';

import classes from './FeaturePage.css';
import * as routes from '../../constants/routes';

const FeaturePage = () => (
    <Content title="Click the Links Below to Check Out Our Features">
        <div className={classes.FeaturePage}>
            <Link to={routes.HOME}>SCHEDULE PLANNER</Link>
            <Link to={routes.SCHEDULE}><p>Schedule End</p></Link>
            <Link to={routes.EVENT}>EVENTS</Link>
        </div>
    </Content>
);


export default FeaturePage;
