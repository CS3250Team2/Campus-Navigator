import React, {Component} from 'react';
import UserForm from '../../components/UserForm/UserForm';

import classes from './HomePage.css';

class HomePage extends Component {
    render() {
        return(
            <div className={classes.HomePage}>
                <h1>LET'S GET YOU<br />ON YOUR WAY</h1>
                <UserForm />
            </div>
        );
    }
}

export default HomePage
