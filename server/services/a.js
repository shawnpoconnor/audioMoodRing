const R = require('ramda');

const a = (words, {notes, meta}) => {

  const wordDetails = R.map(word => {
    const startNote = R.findLast(note => (
      note.startTime <= word.startTime
    ), notes);
    return {
      endTime: word.endTime,
      pitch: startNote.pitch,
      volume: startNote.volume,
      word: word.word,
    };
  })(words, notes);

  return {
    words: wordDetails,
    meta,
  };
};

module.exports = {a};

/*
* {
*   words: [
*     {
*       word: '',
*       endTime: 0,
*       pitch: 0,
*       volume: 0,
*     }
*   ],
*   meta: {
*     maxPitch: 0,
*     minPitch: 0,
*     minVolume: 0,
*     maxVolume: 0,
*   }
* }
*/
