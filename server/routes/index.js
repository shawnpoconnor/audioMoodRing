const express = require('express');
const router = express.Router();
const data = require('../mockJsonCombined');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json(data);
});

module.exports = router;
