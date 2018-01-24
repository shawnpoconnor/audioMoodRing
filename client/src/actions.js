import {analyzeFile} from './audioAnalysis/audioAnalysisGateway';

const uploadFile = file => dispatch => {
  dispatch({
    type: 'words/LOAD',
    payload: false,
  });

  analyzeFile(file)
  .then(words =>
    dispatch({
      type: 'words/UPDATE',
      payload: words,
    })
  )
  .catch(error =>
    dispatch({
      type: 'words/ERROR',
      payload: error,
    })
  );
};

export {
  uploadFile,
};
