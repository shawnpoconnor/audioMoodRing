import React from 'react'

const Transcription = props => (
  <ul>
    {props.words.map((word, i) =>
      <li key={i}>
        {`${word.word}`}
      </li>,
    )}
  </ul>
)

const MAX_HUE = 360
const getColor = (pitch) => `hsl(${Math.round(pitch * MAX_HUE)}, 100%, 50%)`

export default Transcription
