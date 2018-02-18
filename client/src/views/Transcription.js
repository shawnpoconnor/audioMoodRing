import React from 'react'
import styled from 'styled-components'

const MAX_HUE = 360
const MAX_SIZE = 72

const Transcription = ({words, metadata}) => (
  <Container>
    {words.map((word, i) =>
      <Word key={i} metadata={metadata} word={word}>
        {i === 0 ? word.word : ' ' + word.word}
      </Word>,
    )}
  </Container>
)

const Container = styled.p`
  padding: 0 20px;
`

const Word = styled.span`
  color: ${({metadata, word}) => getColor(metadata, word)};
  font-size: ${({metadata, word}) => getFontSize(metadata, word)};
`;

const getColor = (metadata, word) => (
  `hsl(${Math.round(MAX_HUE * normalize(metadata.maxPitch, metadata.minPitch, word.pitch))}, 100%, 50%)`
)
const getFontSize = (metadata, word) => (
  Math.round(MAX_SIZE * normalize(metadata.maxVolume, metadata.minVolume, word.volume)) + 'px'
)

const normalize = (max, min, value) => (value - min) / (max - min);

export default Transcription
