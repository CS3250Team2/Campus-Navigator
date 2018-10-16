import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import RegisterContainer from './containers/RegisterContainer/RegisterContainer';
import LoginContainer from './containers/LoginContainer/LoginContainer';

ReactDOM.render(<App />, document.getElementById('root')); //THIS LINE IS WHAT RENDERS THE APPLICATION TO THE HTML DOM



registerServiceWorker();
