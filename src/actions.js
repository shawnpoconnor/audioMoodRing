import {analyzeFile} from './audioAnalysis/audioAnalysisGateway';

const uploadFile = file => dispatch => {
  dispatch({
    type: 'notes/LOAD',
    payload: false,
  });

  analyzeFile(file)
  .then(notes =>
    dispatch({
      type: 'notes/UPDATE',
      payload: notes,
    })
  )
  .catch(error =>
    dispatch({
      type: 'notes/ERROR',
      payload: error,
    })
  );
};

export {
  uploadFile,
};
