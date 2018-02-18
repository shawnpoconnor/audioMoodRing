import React from 'react'
import { connect } from 'react-redux'
import { uploadFile } from '../actions'
import { getAllWords, getMetadata, getShouldShowFileUpload } from '../selectors'
import Header from './Header'
import FileUpload from './FileUpload'
import Transcription from './Transcription'

const App = props => (
  <React.Fragment>
    <Header />
    <FileUpload onDrop={props.uploadFile} shouldShowFileUpload={props.shouldShowFileUpload} />
    <Transcription words={props.words} />
  </React.Fragment>
)

export default connect(
  state => ({
    shouldShowFileUpload: getShouldShowFileUpload(state),
    words: getAllWords(state),
    metadata: getMetadata(state),
  }),
  {uploadFile},
)(App)
