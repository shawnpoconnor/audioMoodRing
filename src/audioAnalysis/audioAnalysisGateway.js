import request from 'superagent';
const config = require('../secrets.json');

const URL = 'https://api.sonicAPI.com/analyze/melody';

export const analyzeFile = (path = '%PUBLIC_URL%/speech.wav') =>
  new Promise((resolve, reject) =>
    request
      .post(URL)
      .field('detailed_result', true)
      .field('access_id', config.sonicApi)
      .field('format', 'json')
      .attach('input_file', path)
      .end(resolve));
