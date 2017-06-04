const request = require('request-promise');

const URL = 'https://api.sonicAPI.com/analyze/melody';
const MAX_MIDI = 127;

export const analyzeFile = file =>
  new Promise((resolve, reject) =>
    request.post({
      url: URL,
      formData: {
        detailed_result: true,
        access_id: process.env.REACT_APP_SONIC_API,
        format: "json",
        input_file: new File(file, 'input.wav')
      }
    })
    .then(res => toNotes(res.body))

const toNotes = (response) =>
  response.melody_result.pitch_curve.map(note => ({
    pitch: note.midi_pitch / MAX_MIDI,
    startTime: note.time,
    volume: note.volume
  }));
