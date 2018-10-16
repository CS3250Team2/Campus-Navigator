/* Component Name: App
 * Function: Root component of the application
 *
 * Props Received: None
 *
 */

import React, { Component } from 'react';
import './bootstrap-4.1.3-dist/bootstrap.min.css'


import classes from './App.css';
import Layout from './components/Layout/Layout';
import HomePage from './containers/HomePage/HomePage';

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <Layout>
          <HomePage/>
        </Layout>
      </div>
    );
  };
}

export default App;
