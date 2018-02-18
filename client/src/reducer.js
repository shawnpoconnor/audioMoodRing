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
        hasAnalyzed: true,
        isLoading: false,
        metadata: action.payload.meta,
        words: action.payload.words,
      }
    case 'words/RESET':
      return {
        hasAnalyzed: false,
        isLoading: false,
        metadata: {},
        words: [],
      }
    default:
      return state
  }
}

export default combineReducers({
  audio: audioReducer,
})
