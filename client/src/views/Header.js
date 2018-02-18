import React from 'react'
import styled from 'styled-components'

const Header = styled.header`
    align-items: center;
    background-color: lightblue;
    display: flex;
    flex-direction: column;
    height: 200px;
    padding: 50px 0;
    justify-content: space-between;
    text-align: center;
`

export default props => (
  <Header>
    <h1>Audio Mood Ring</h1>
    <div>
      {props.shouldShowReset && <button onClick={props.handleResetClick}>Reset</button>}
    </div>
  </Header>
);
