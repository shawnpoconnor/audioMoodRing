export const getShouldShowFileUpload = state => !(state.words.isLoading);
export const getAllWords = state => state.words.entities;
