import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import {analyzeFile} from '../audioAnalysis/audioAnalysisGateway';
import logo from './logo.svg';
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <h2>Sound Analysis</h2>
        <Dropzone onDrop={onDrop}>
          "s'go"
        </Dropzone>
      </div>
    );
  }
}

const onDrop = (file) => {
  analyzeFile(file);
}

export default App;
