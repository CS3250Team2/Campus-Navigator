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
            <Content title="School Selection">
                <div className={classes.LandingPage}>
                    <div className={classes.CampusToggle} onClick={this.toggleMenu}>
                        CHOOSE YOUR CAMPUS
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
