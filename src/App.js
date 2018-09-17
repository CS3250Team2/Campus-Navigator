import React, { Component } from 'react';
import FileInput from './components/fileInput'
//import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="InputComponent">
          <FileInput />
        </div>
      </div>

    );
  }
}

export default App;
