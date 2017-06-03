import React from 'react';

const Transcription = props =>
  <ul>
    {props.notes.map((note, index) =>
      <li key={index} style={{color: getColor(note)}} >
        {`${note.pitch} ${note.startTime} ${note.volume}`}
      </li>
    )}
  </ul>;

const MAX_HUE = 360;
const getColor = ({pitch, volume}) => `hsl(${Math.round(pitch * MAX_HUE)}, 100%, 50%)`;

export default Transcription;
