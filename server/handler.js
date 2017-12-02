'use strict';

module.exports.mood = (event, context, callback) => {
  const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*', // Required for CORS support to work
    },
    body: JSON.stringify(require('./mockJsonCombined.json')),
  };

  callback(null, response);
};
