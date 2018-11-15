/* Component Name: HomePage
 * Function: Content of the landing page
 *
 * Props Received: None
 *
 */

import React, { Component } from "react";

import classes from "./HomePage.css";

class HomePage extends Component {
  myFunction = e => {
      document.getElementById("myDropdown").classList.toggle("show");
  }

  filterFunction = e => {
      let input, filter, ul, li, a, i;
      input = document.getElementById("myInput");
      filter = input.value.toUpperCase();
      let div = document.getElementById("myDropdown");
      a = div.getElementsByTagName("a");
      for (i = 0; i < a.length; i++) {
          if (a[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
              a[i].style.display = "";
          } else {
              a[i].style.display = "none";
          }
      }
  }
    render() {
        return (

          <div className={classes.HomePage}>
            <div className={classes.Content}>
                <div className={classes.dropdown}>
                  <button onClick={this.myFunction} className={classes.dropbtn}>Choose your campus</button>
                  <div id="myDropdown" className={classes.dropdownContent}>
                    <input type="text" placeholder="Search.."id='myInput' className={classes.myInput} onClick={this.filterFunction}/>
                    <a href="#about">About</a>
                    <a href="#base">Base</a>
                    <a href="#blog">Blog</a>
                    <a href="#contact">Contact</a>
                    <a href="#custom">Custom</a>
                    <a href="#support">Support</a>
                    <a href="#tools">Tools</a>
                  </div>
                </div>
            </div>
          </div>
        );
    }
}

export default HomePage;
