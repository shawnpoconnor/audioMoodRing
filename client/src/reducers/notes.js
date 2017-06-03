const defaultState = {
    entities: [],
    isLoading: false,
    isErrored: false,
}

export default (state = defaultState, action) => {
    switch(action.type) {
        case 'notes/LOAD':
            return {
                ...state,
                isLoading: true,
            };
        case 'notes/UPDATE':
            return {
                ...state,
                isLoading: false,
                isErrored: false,
                entities: action.payload,
            }
        case 'notes/ERROR':
            return {
                ...state,
                isLoading: false,
                isErrored: true,
            }
        default:
            return state;
    }
}
