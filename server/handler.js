'use strict';

module.exports.mood = (event, context, callback) => {
  const mockJsonCombined = require('./mockJsonCombined.json');
  mockJsonCombined.melody = require('./melody.json');

  const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*', // Required for CORS support to work
    },
    body: JSON.stringify(mockJsonCombined),
  };

  callback(null, response);
};
