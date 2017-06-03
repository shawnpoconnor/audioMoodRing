export const getShouldShowFileUpload = state => !(state.words.isLoading || state.notes.isLoading);
export const getAllNotes = state => state.notes.entities;
export const getAllWords = state => state.words.entities;
