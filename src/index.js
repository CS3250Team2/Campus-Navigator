import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import UserForm from './components/userForm';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<UserForm />, document.getElementById('root')); //THIS LINE IS WHAT RENDERS THE APPLICATION TO THE HTML DOM



registerServiceWorker();
