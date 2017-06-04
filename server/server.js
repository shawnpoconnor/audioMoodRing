const express = require('express');
const app = express();

app.listen(8000, function() {
  console.log('listening on 8000')
})

app.post('/notes', function(req, res) {
  //some kind of API call
  res.sendFile(__dirname + '/mockJsonNotes.json')
})

app.post('/words', function(req, res) {
  //some kind of API call
  res.sendFile(__dirname + '/mockJsonWords')
})
