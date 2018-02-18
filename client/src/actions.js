import { analyzeFile } from './api'

export const uploadFile = file => dispatch => {
  dispatch({
    type: 'words/LOAD',
  })

  analyzeFile(file)
    .then(words =>
      dispatch({
        type: 'words/UPDATE',
        payload: words,
      }),
    )
    .catch(error =>
      dispatch({
        type: 'words/ERROR',
        payload: error,
      }),
    )
}

export const resetAnalysis = () => ({
  type: 'words/RESET'
})
