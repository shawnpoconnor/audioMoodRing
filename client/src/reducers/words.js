const defaultState = {
    entities: [],
    isLoading: false,
}

export default (state = defaultState, action) => {
    switch(action.type) {
      case 'words/LOAD':
          return {
              ...state,
              isLoading: true,
          };
      case 'words/UPDATE':
          return {
              ...state,
              isLoading: false,
              isErrored: false,
              entities: action.payload,
          }
      case 'words/ERROR':
          return {
              ...state,
              isLoading: false,
              isErrored: true,
          }
      default:
            return state;
    }
}
