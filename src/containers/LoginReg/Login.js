/* Component Name: Login
 * Function: Content for the Login page
 *
 * Props Received: None
 *
 */

import React, { Component } from "react";
import Content from "../Content/Content";
import classes from "./LoginReg.css";
import axios from "axios";
import firebase, { auth, provider } from '../../firebase'

class LoginPage extends Component {

  ui.start('#firebaseui-auth-container', {
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID
  ],
  // Other config options...
});
  /*constructor(props) {
    super(props)
    this.state = {
      user: null
    }
    this.login = this.login.bind(this)
    this.logout = this.logout.bind(this)
  }

  login() {
    auth.signInWithPopup(provider).then((result) => {
      this.setState({
          user: result.user
      })
    })
  }
  logout() {
    auth.signOut().then((result) => {
      this.setState({
        user: null
      })
    })
  }
  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({user})
      }
    })
  }*/
    render() {
        return (
            <div className={classes.Login}>
                <Content title="Login">;'[??]'
                    <form>
                        <label for="username">Email:</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            placeholder="Enter Email"
                        />
                        <label for="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Enter Password"
                        />
                        <input
                            type="submit"
                            className={classes.SubmitButton}
                            value="Submit"
                        />
                      <script></script>
                    </form>
                </Content>
            </div>
        );
    }
}

export default LoginPage;
