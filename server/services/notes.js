const R = require('ramda');
const request = require('request-promise');
const response = require('../melody');

const URL = 'https://api.sonicAPI.com/analyze/melody';
const API_KEY = '5c3b2ddd-10a4-47c2-8536-c74b520335bf';

const analyzeFile = file => (
  // new Promise((resolve, reject) => (
  //   request.post({
  //     url: URL,
  //     formData: {
  //       access_id: API_KEY,
  //       detailed_result: true, // remove?
  //       format:'json',
  //       input_file: new File(file, 'input.wav')
  //     }
  //   })
  // )).then(res => toNotes(res.body))
  Promise.resolve(toNotes(response))
);

const MIN_MIDI = 0;
const MAX_MIDI = 127;

const minNotesProperty = (prop) => R.compose(
  R.reduce(R.min, MAX_MIDI),
  R.map(
    R.prop(prop),
  )
);

const maxNotesProperty = (prop) => R.compose(
  R.reduce(R.max, MIN_MIDI),
  R.map(
    R.prop(prop),
  )
);

const toNotes = response => {
  const notes = R.map(
    note => ({
      pitch: note.midi_pitch,
      startTime: note.onset_time,
      volume: note.volume,
    })
  )(response.melody_result.notes);

  const maxPitch = maxNotesProperty('pitch')(notes);
  const minPitch = minNotesProperty('pitch')(notes);
  const maxVolume = maxNotesProperty('volume')(notes);
  const minVolume = minNotesProperty('volume')(notes);

  return {
    meta: {
      maxPitch,
      minPitch,
      maxVolume,
      minVolume,
    },
    notes,
  };
};

module.exports = {analyzeFile};
