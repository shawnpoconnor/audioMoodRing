import request from 'superagent';

const URL = 'http://localhost:3001/';

export const analyzeFile = file =>
  new Promise((resolve, reject) =>
    request
      .post(URL)
      .attach('file', new File(file, 'input.wav'))
      .end((error, response) =>
        error
          ? reject(error)
          : resolve(response.body))
  );
