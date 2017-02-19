import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import {analyzeFile} from '../audioAnalysis/audioAnalysisGateway';
import './styles/App.css';

const MAX_HUE = 360;

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      shouldShowDropzone: true,
      notes: [],
    };
  }

  render() {
    return (
      <div>
        <header className="header">
          <div>Audio Mood Ring</div>
        </header>
        <main className="content">
          {this.state.shouldShowDropzone
            ? this.renderDropzone.bind(this)()
            : this.renderNotes.bind(this)()}
        </main>
      </div>
    );
  }

  renderDropzone() {
    return <Dropzone onDrop={this.onDrop.bind(this)}>
      "s'go"
    </Dropzone>
  }

  renderNotes() {
    return <ul>
      {this.state.notes.map((note, index) =>
        <li key={index} style={{color: this.getColor(note)}} >
          {`${note.pitch} ${note.startTime} ${note.volume}`}
        </li>
      )}
    </ul>
  }

  onDrop(file) {
    this.setState({
        isLoading: true,
        shouldShowDropzone: false
    });

    analyzeFile(file)
      .then(notes => console.log(notes.length) || this.setState({
        isLoading: false,
        notes
    }));
  }

  getColor({pitch, volume}) {
    return `hsl(${Math.round(pitch * MAX_HUE)}, 100%, 50%)`
  }
}


export default App;
