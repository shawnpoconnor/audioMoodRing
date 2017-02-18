import request from 'superagent';
const config = require('../secrets.json');
const mockAnalysis = require('./mockAnalysis.json'); // To reduce API calls

const URL = 'https://api.sonicAPI.com/analyze/melody';
const MAX_MIDI = 127;

export const analyzeFile = (file) =>
  new Promise((resolve, reject) =>
  //   request
  //     .post(URL)
  //     .field('detailed_result', true)
  //     .field('access_id', config.sonicApi)
  //     .field('format', 'json')
  //     .field('end_seconds', 3)
  //     .attach('input_file', new File(myPath, 'input.wav'))
  //     .end((error, response) =>
  //       error
  //         ? reject(error)
  //         : resolve(toNotes(response))));
    resolve(toNotes(mockAnalysis)));

const toNotes = (response) =>
  response.melody_result.notes.map(note => ({
    pitch: note.midi_pitch / MAX_MIDI,
    startTime: note.onset_time,
    volume: note.volume
  }));
