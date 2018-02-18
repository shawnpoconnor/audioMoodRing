export const getShouldShowFileUpload = state => !state.audio.isLoading;
export const getAllWords = state => state.audio.words;
export const getMetadata = state => state.audio.metadata;
