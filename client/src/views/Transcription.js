import React from 'react';

const Transcription = props =>
  // <ul>
  //   {props.words.map((word, index) =>
  //     <li>
  //       {`${word.word}`}
  //     </li>
  //   )}
  //
  // </ul>;
  // console.log(props);

  <p>{props.words[0]}</p>;

const MAX_HUE = 360;
const getColor = (pitch) => `hsl(${Math.round(pitch * MAX_HUE)}, 100%, 50%)`;

export default Transcription;
