const express = require('express');
const app = express();


app.listen(8000, function() {
  console.log('listening on 8000')
})

app.post('/notes', function(req, res) {
  //some kind of speechToText API call
  //some kind of audioAnalysis API call

  //make a response var that combines both json objects

  // console.log('Hit API route!')
  res.sendFile(__dirname + '/mockJsonCombined.json')
})
