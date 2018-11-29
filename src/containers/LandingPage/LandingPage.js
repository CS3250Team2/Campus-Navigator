/* Component Name: LandingPage
 * Function: Content of the landing page
 *
 * Props Received: None
 *
 */

import React, { Component } from "react";

import classes from "./LandingPage.css";
import * as routes from '../../constants/routes';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ScheduleUpload from '../ScheduleUpload/ScheduleUpload';
import NavItem from '../../components/Navigation/NavItems/NavItem/NavItem';


class LandingPage extends Component {
  constructor() {
    super();

    this.state = {
      showMenu: false,
    }
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }
  closeMenu(event){
    if(event.target!=null && this.dropdownMenu!=null){
      if (!this.dropdownMenu.contains(event.target)) {

        this.setState({ showMenu: false }, () => {
          document.removeEventListener('click', this.closeMenu);
        });
      }
    }

  }
  showMenu(event) {
    event.preventDefault();

    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }
    render() {
        return (

          <div className={classes.HomePage}>
            <div className={classes.Content}>
                <div className={classes.dropdown}>
                  <button onClick={this.showMenu} className={classes.dropbtn}>CHOOSE YOUR CAMPUS</button>
                  {  this.state.showMenu
              ? (
                <div id="myDropdown" className={classes.dropdownContent} onClick={this.closeMenu}ref={(element) => {
                  this.dropdownMenu = element;
                }}>

                  <Route path={routes.HOME} component={ScheduleUpload} />
                  <NavItem link={routes.HOME}><a>Metropolitan State University of Denver at Auraria Campus</a></NavItem>
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

export default LandingPage;
