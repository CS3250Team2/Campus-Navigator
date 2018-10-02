import React, {Component} from 'react';

import classes from './HomePage.css';

class HomePage extends Component {
    render() {
        return(
            <div className={classes.HomePage}>
                <h1>LET'S GET YOU<br />ON YOUR WAY</h1>
                <div className="uploadButton">UPLOAD SCHEDULE</div>
            </div>
        );
    }
}

export default HomePage