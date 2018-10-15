import React, { Component } from 'react';
import classes from './loginPage.css';
import axios from 'axios';

class LoginPage extends Component {
  render() {
    return (
      <div className={classes.Main}>
        <div className={classes.ImageHeader}>
          <img src={require('../assets/images/logo03.png')} alt="Campus Navigator Logo"></img>
          <br></br>
          <h3>Login</h3>
        </div>
        <form>
          <input placeholder="Enter Username"></input>
          <br></br>
          <input placeholder="Enter Password"></input>
          <br></br>
          <input type='submit'className={classes.SubmitButton}></input>
        </form>
      </div>

    );
  };
}

export default LoginPage;
