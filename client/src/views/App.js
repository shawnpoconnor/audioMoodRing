import React from 'react'
import { connect } from 'react-redux'
import { resetAnalysis, uploadFile } from '../actions'
import { getAllWords, getMetadata, shouldShowFileUpload } from '../selectors'
import Header from './Header'
import FileUpload from './FileUpload'
import Transcription from './Transcription'

const App = props => (
  <React.Fragment>
    <Header shouldShowReset={!props.shouldShowFileUpload} handleResetClick={props.resetAnalysis} />
    <FileUpload onDrop={props.uploadFile} shouldShowFileUpload={props.shouldShowFileUpload} />
    <Transcription words={props.words} metadata={props.metadata} />
  </React.Fragment>
)

export default connect(
  state => ({
    shouldShowFileUpload: shouldShowFileUpload(state),
    words: getAllWords(state),
    metadata: getMetadata(state),
  }),
  {uploadFile, resetAnalysis},
)(App)
