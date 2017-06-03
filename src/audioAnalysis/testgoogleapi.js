import stream from 'filereader-stream';
const Speech = require('@google-cloud/speech');

const request = {
  config: {
    encoding: 'LINEAR16',
    sampleRate: 16000
  }
};

export const testGoogleApi = (file) => {
  const speech = Speech();
  stream(file)
    .pipe(speech.createRecognizeStream(request)
      .on('error', console.error)
      .on('data', (data) =>
        console.log('Data received: %j', data))
    );
}
