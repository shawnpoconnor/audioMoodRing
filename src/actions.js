const uploadFile = () => ({
    type: 'words/LOAD',
    payload: false,
    // testGoogleApi(file);
    // analyzeFile(file)
    //   .then(notes => console.log(notes.length) || this.setState({
    //     isLoading: false,
    //     notes
    // }));
});

export {
    uploadFile,
};
