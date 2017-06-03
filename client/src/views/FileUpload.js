import React from 'react';
import Dropzone from 'react-dropzone';

const FileUpload = props =>
  props.shouldShowFileUpload
    ? <Dropzone onDrop={props.onDrop}>Drop it like it's hot</Dropzone>
    : null;

export default FileUpload;
