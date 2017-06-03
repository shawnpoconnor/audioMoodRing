import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';

import {uploadFile} from '../actions';
import {getShouldShowFileUpload, getAllWords, getAllNotes} from '../selectors';
import Header from './Header';
import FileUpload from './FileUpload';
import Transcription from './Transcription';

const App = props =>
  <Main>
    <Header />
    <FileUpload onDrop={props.uploadFile} shouldShowFileUpload={props.shouldShowFileUpload} />
    <Transcription notes={props.notes} />
  </Main>;

const Main = styled.div``;

export default connect(
  state => ({
    shouldShowFileUpload: getShouldShowFileUpload(state),
    notes: getAllNotes(state),
    words: getAllWords(state),
  }),
  {
    uploadFile
  }
)(App);
