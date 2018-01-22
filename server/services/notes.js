const request = require('request-promise');
const response = require('../melody');

const URL = 'https://api.sonicAPI.com/analyze/melody';
const API_KEY = '5c3b2ddd-10a4-47c2-8536-c74b520335bf';
const MAX_MIDI = 127;

const analyzeFile = file => (
  // new Promise((resolve, reject) => (
  //   request.post({
  //     url: URL,
  //     formData: {
  //       access_id: API_KEY,
  //       detailed_result: true,
  //       format:'json',
  //       input_file: new File(file, 'input.wav')
  //     }
  //   })
  // )).then(res => toNotes(res.body))
  Promise.resolve(toNotes(response))
);

const toNotes = (response) => (
  response.melody_result.pitch_curve.map(note => ({
    pitch: note.midi_pitch / MAX_MIDI,
    startTime: note.time,
    volume: note.volume
  }))
);

module.exports = { analyzeFile };
