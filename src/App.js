import React, { Component } from 'react';

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
