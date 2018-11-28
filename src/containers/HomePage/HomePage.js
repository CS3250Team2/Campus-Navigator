/* Component Name: HomePage
 * Function: Container for the content of the landing page
 *
 * Props Received: None
 *
 */

import React, { Component } from "react";
import UserForm from "../../components/UserForm/UserForm";

import classes from "./HomePage.css";

class HomePage extends Component {
    render() {
        return (
            <div className={classes.HomePage}>
                <div className={classes.Content}>
                  <div className="image">
                    <img src={require('../../assets/images/Group 40.png')} className='center' alt='campus bar'/>
                ? (
                    <div id="myDropdown" className={classes.dropdownContent} onClick={this.closeMenu}ref={(element) => {
                        this.dropdownMenu = element;
                    }}>
                      <a href="#about">Metropolitan State University of Denver at Auraria Campus</a>
                      {/*<a href="#about">Heyo this is dummy tex that is as long as possible to test if the padding is uniform lalalalalalalalalalalalalalalalalal </a>*/}

                    </div>
                  )
                : (
                    null
                  )
                  }
                  </div>
                </div>
            </div>
        );
    }
}

export default HomePage;
