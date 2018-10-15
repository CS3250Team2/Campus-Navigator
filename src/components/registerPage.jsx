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
          <br />
          <input placeholder="Create Password"></input>
          <br />
          <input placeholder="Confirm Password"></input>
          <br />
            <div className="g-recaptcha" data-sitekey='6Lc8MHUUAAAAAD8YIzicLlA-pa-8dTN4qFycOLoU'></div>
          <br />
          <input type='submit'className={classes.SubmitButton}></input>
        </form>
      </div>

    );
  };
}

export default RegisterPage;
