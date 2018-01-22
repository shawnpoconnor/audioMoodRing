const response = require('../mockJsonCombined');

const wordsFromFile = file => (
  Promise.resolve(response)
);

module.exports = { wordsFromFile };
