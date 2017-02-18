import request from 'superagent';
const config = require('../secrets.json');

const URL = 'https://api.sonicAPI.com/analyze/melody';

export const analyzeFile = (myPath = './speech.wav') =>
  new Promise((resolve, reject) =>
    request
      .post(URL)
      .field('detailed_result', true)
      .field('access_id', config.sonicApi)
      .field('format', 'json')
      .field('end_seconds', 3)
      .attach('input_file', new File(myPath, 'input.wav'))
      .end((error, response) => {
        if(error) {
          reject(error);
        } else {
          resolve(response);
        }
      }));
