import React, { Component } from 'react';
import classes from './LoginContainer.css';
import LoginPage from '../../components/loginPage';

class LoginContainer extends Component {
  render() {
    return (
      <div className={classes.Main}>
        <LoginPage/>
      </div>
    );
  };
}

export default LoginContainer;
