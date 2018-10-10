import React, {Component} from 'react';
import UserForm from '../../components/userForm';

import classes from './HomePage.css';

class HomePage extends Component {
    render() {
        return(
            <div className={classes.HomePage}>
                <h1>LET'S GET YOU<br />ON YOUR WAY</h1>
                <div className="uploadButton">
                  <h3>Upload Your schedule here</h3>
                  <UserForm />
                </div>
            </div>
        );
    }
}

export default HomePage
