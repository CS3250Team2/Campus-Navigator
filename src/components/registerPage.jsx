import React, { Component } from 'react';
import classes from './registerPage.css';
import axios from 'axios';

class RegisterPage extends Component {
  render() {
    return (
      <div className={classes.Main}>
        <div className={classes.ImageHeader}>
          <img src={require('../assets/images/logo03.png')} alt="Campus Navigator Logo"></img>
          <br></br>
          <h3>Sign Up</h3>          
        </div>
        <form>
          <input placeholder="Create Username"></input>
          <br></br>
          <input placeholder="Create Password"></input>
          <br></br>
          <input placeholder="Confirm Password"></input>
          <br></br>
          <input type='submit'className={classes.SubmitButton}></input>
        </form>
      </div>

    );
  };
}

export default RegisterPage;
