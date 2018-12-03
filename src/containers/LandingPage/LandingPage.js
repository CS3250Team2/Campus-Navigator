/* Component Name: LandingPage
 * Function: Content for the home page for unauthenticated users
 *
 * Props Received: None
 *
 */

import React from 'react';
import Content from '../Content/Content';
import { Link } from 'react-router-dom';

import classes from './LandingPage.css';
import * as routes from '../../constants/routes';

class LandingPage extends React.Component {
    constructor() {
        super();

        this.state = {
            showMenu: false,
        };

        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu = () => {
        this.setState(prevState => {
            return { showMenu: !prevState.showMenu };
        });
    };

    render() {
        return (
            <Content title="">
                <div className={classes.LandingPage}>
                    <div className={classes.CampusToggle} onClick={this.toggleMenu}>
                        Choose Your Campus
                    </div>
                    {this.state.showMenu ? (
                        <div className={classes.CampusSelection}>
                            <Link to={routes.HOME}>Metropolitan State University of Denver</Link>
                        </div>
                    ) : null}
                </div>
            </Content>
        );
    }
}

export default LandingPage;
