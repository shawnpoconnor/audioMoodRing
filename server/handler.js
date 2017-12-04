'use strict';
const request = require('request');

const URL = 'https://api.sonicAPI.com/analyze/melody';

const handleResponse = (resolve, reject) => (err, httpResponse, body) => {
  if (err) {
    console.log('upload failed:', err);
  }
  console.log('Upload successful!  Server responded with:', httpResponse);
};

const sonicApiUpload = (file) => {
  const formData = {
    access_id: '5c3b2ddd-10a4-47c2-8536-c74b520335bf',
    detailed_result: 'true',
    format: 'json',
    input_file: file,
  };
  return new Promise((resolve, reject) => {
    request.post({url: URL, formData: formData}, handleResponse(resolve, reject));
  });
};

module.exports.mood = (event, context, callback) => {
  // const mockJsonCombined = require('./mockJsonCombined.json');
  // mockJsonCombined.melody = require('./melody.json');
  sonicApiUpload(event.body)
    .then(response => response.body, error => console.log(error));
  const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*', // Required for CORS support to work
    },
    body: JSON.stringify(""),
  };

  callback(null, response);
};
