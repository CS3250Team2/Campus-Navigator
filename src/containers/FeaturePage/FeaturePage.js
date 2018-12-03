/* Component Name: FeaturePage
 * Function: Container for the content of the features
 *
 * Props Received: None
 *
 */

import React, {Component} from 'react';
import classes from './FeaturePage.css';
import ScheduleUpload from '../ScheduleUpload/ScheduleUpload';
import { Link } from 'react-router-dom';
import * as routes from '../../constants/routes';

class FeaturePage extends Component {
    render() {
        return(
            <div className={classes.FeaturePage}>
              <div id="grid">
                <div className={classes.Content}>
                  <img
                      className={classes.Logo}
                      src={require("../../assets/images/logo03.png")}
                      alt="Campus Navigator Logo"
                  />
                  <h1>CLICK THE LINKS BELOW TO CHECK OUT OTHER FEATURES</h1>
                  <Link to={routes.HOME}><p>Schedule Planner</p></Link>
                  <Link to={routes.SCHEDULE}><p>Schedule End</p></Link>
                  <Link to={routes.EVENT}><p>Events</p></Link>
                </div>
              </div>
            </div>
        );
    }
}

export default FeaturePage
