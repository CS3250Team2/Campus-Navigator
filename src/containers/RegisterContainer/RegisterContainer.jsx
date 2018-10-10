import React, { Component } from 'react';
import classes from './RegisterContainer.css';
import RegisterPage from '../../components/registerPage';

class RegisterContainer extends Component {
  render() {
    return (
      <div className={classes.Main}>
        <RegisterPage/>
      </div>
    );
  };
}

export default RegisterContainer;
