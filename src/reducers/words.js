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
        default:
            return state;
    }
}
