export const shouldShowFileUpload = state => !state.audio.isLoading && !state.audio.hasAnalyzed
export const getAllWords = state => state.audio.words
export const getMetadata = state => state.audio.metadata
