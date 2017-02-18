import React, { Component } from 'react';
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
        <button className="App-intro" onClick={analyzeFile}>
          {"s'go"}
        </button>
      </div>
    );
  }
}

export default App;
