import request from 'superagent';

const URL = (process.env.NODE_ENV === 'development')
  ? 'http://localhost:3001/mood'
  : 'https://gwkxo1ko5b.execute-api.us-east-1.amazonaws.com/dev/mood';

const MAX_MIDI = 127;

export const analyzeFile = file =>
  new Promise((resolve, reject) =>
    request.get(URL)
      .end((error, response) =>
        error
          ? reject(error)
          : resolve(toNotes(response.body))
      ));
// new Promise((resolve, reject) =>
//   request
//     .post(URL)
//     .field('detailed_result', true)
//     .field('access_id', process.env.REACT_APP_SONIC_API)
//     .field('format', 'json')
//     .attach('input_file', new File(file, 'input.wav'))
//     .end((error, response) =>
//       error
//         ? reject(error)
//         : resolve(toNotes(response.body))));

const toNotes = ({melody}) =>
  melody.melody_result.pitch_curve.map(note => ({
    pitch: note.midi_pitch / MAX_MIDI,
    startTime: note.time,
    volume: note.volume
  }));
