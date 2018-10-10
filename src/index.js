import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import UserForm from './components/userForm';
import registerServiceWorker from './registerServiceWorker';
import RegisterContainer from './containers/RegisterContainer/RegisterContainer';

ReactDOM.render(<App />, document.getElementById('root')); //THIS LINE IS WHAT RENDERS THE APPLICATION TO THE HTML DOM



registerServiceWorker();
