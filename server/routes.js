const express = require('express');
const {wordsFromFile} = require('./services/words');
const {analyzeFile} = require('./services/notes');
const {a} = require('./services/a');

const router = express.Router();

router.post('/', function (req, res, next) {
  Promise.all([
    wordsFromFile(),
    analyzeFile(),
  ])
    .then(([words, notes]) => res.json(a(words, notes)));
});

module.exports = router;
