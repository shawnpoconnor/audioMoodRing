import React from 'react';
import styled from 'styled-components';

import Header from './Header';
import FileUpload from './FileUpload';
import Transcription from './Transcription';

class App extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      shouldShowFileUpload: true,
      notes: [],
      words: ''
    };
  }

  render() {
    return (
      <Main>
        <Header />
        <FileUpload onDrop={this.onDrop} shouldShowFileUpload={this.state.shouldShowFileUpload} />
        <Transcription notes={[]} />
      </Main>
    );
  }


  onDrop = (file) => {
    this.setState({
        isLoading: true,
        shouldShowFileUpload: false
    });
    // testGoogleApi(file);
    // analyzeFile(file)
    //   .then(notes => console.log(notes.length) || this.setState({
    //     isLoading: false,
    //     notes
    // }));
  }
}

const Main = styled.div``;

export default App;
