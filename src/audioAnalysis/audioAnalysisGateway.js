import request from 'superagent';
const config = require('../secrets.json');

const URL = 'https://api.sonicAPI.com/analyze/melody';
const MAX_MIDI = 127;

export const analyzeFile = (file) =>
  new Promise((resolve, reject) =>
    request
      .post(URL)
      .field('detailed_result', true)
      .field('access_id', config.sonicApi)
      .field('format', 'json')
      .attach('input_file', new File(file, 'input.wav'))
      .end((error, response) =>
        error
          ? reject(error)
          : resolve(toNotes(response.body))));

const toNotes = (response) =>
  response.melody_result.pitch_curve.map(note => ({
    pitch: note.midi_pitch / MAX_MIDI,
    startTime: note.time,
    volume: note.volume
  }));
