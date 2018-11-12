/* Component Name: FeaturePage
 * Function: Container for the content of the features
 *
 * Props Received: None
 *
 */

import React, {Component} from 'react';
import classes from './FeaturePage.css';

class FeaturePage extends Component {
    render() {
        return(
            <div className={classes.FeaturePage}>
              <h1>Explore</h1>
              <div id="grid">
                <div id="item1"><h2><a href="http://localhost:3000/upload">Campus Navigator</a></h2></div>
                <div id="item2"><h2><a href="https://msudenver.edu/maps/">Campus Map</a></h2></div>
                <div id="item3"><h2><a href="http://localhost:3000/features">Eat On Campus</a></h2></div>
                <div id="item4"><h2><a href="http://localhost:3000/contact">Contact Us</a></h2></div>
              </div>
            </div>
        );
    }
}

export default FeaturePage
