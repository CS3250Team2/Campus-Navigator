import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Firebase, { FirebaseContext } from './firebase';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <FirebaseContext.Provider>
        <App />
    </FirebaseContext.Provider>,
    document.getElementById('root')
); //THIS IS WHAT RENDERS THE APPLICATION TO THE HTML DOM

registerServiceWorker();
