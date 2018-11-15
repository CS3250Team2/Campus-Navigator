/* Component Name: HomePage
 * Function: Content of the landing page
 *
 * Props Received: None
 *
 */

import React, { Component } from "react";

import classes from "./HomePage.css";

class HomePage extends Component {
  constructor() {
    super();

    this.state = {
      showMenu: false,
    }
    this.showMenu = this.showMenu.bind(this);
  }  

  showMenu(event) {
    event.preventDefault();

    this.setState({
      showMenu: true,
    });
  }
    render() {
        return (

          <div className={classes.HomePage}>
            <div className={classes.Content}>
                <div className={classes.dropdown}>
                  <button onClick={this.showMenu} className={classes.dropbtn}>Choose your campus</button>
                  {  this.state.showMenu
              ? (
                <div id="myDropdown" className={classes.dropdownContent}>
                  <a href="#about">Metropolitan State University of Denver</a>

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
