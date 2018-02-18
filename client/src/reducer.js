import { combineReducers } from 'redux'

const defaultState = {
  words: [],
  metadata: {},
  isLoading: false,
}

const audioReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'words/LOAD':
      return {
        ...state,
        isLoading: true,
      }
    case 'words/UPDATE':
      return {
        ...state,
        isLoading: false,
        isErrored: false,
        words: action.payload.words,
        metadata: action.payload.metadata,
      }
    case 'words/ERROR':
      return {
        ...state,
        isLoading: false,
        isErrored: true,
      }
    default:
      return state
  }
}

export default combineReducers({
  audio: audioReducer,
})
