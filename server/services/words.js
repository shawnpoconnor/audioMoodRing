const R = require('ramda');
const response = require('../mockJsonCombined');

const wordsFromFile = file => (
  Promise.resolve(response)
    .then(toWords)
);

const toWords = R.compose(
  R.chain(
    R.compose(
      R.map(timestamp => ({
        word: timestamp[0],
        startTime: timestamp[1],
        endTime: timestamp[2],
      })),
      R.prop('timestamps'),
      R.head,
      R.prop('alternatives'),
    )
  ),
  R.prop('results'),
  R.head,
  R.prop('words')
);

module.exports = {wordsFromFile};
