<<<<<<< HEAD
import React, {Component} from 'react';
import UserForm from '../../components/userForm';
=======
/* Component Name: HomePage
 * Function: Container for the content of the landing page
 * 
 * Props Received: None
 * 
 */

import React, {Component} from 'react';
import UserForm from '../../components/UserForm/UserForm';
>>>>>>> origin/rhiller-homepage

import classes from './HomePage.css';

class HomePage extends Component {
    render() {
        return(
            <div className={classes.HomePage}>
<<<<<<< HEAD
                <h1>LET'S GET YOU<br />ON YOUR WAY</h1>
                <div className="uploadButton">
                  <h3>Upload Your schedule here</h3>
                  <UserForm />
                </div>
=======
                <h1>LET'S GET YOU ON YOUR WAY</h1>
                <UserForm />
>>>>>>> origin/rhiller-homepage
            </div>
        );
    }
}

export default HomePage
