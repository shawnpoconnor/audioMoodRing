import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
    height: 200px;
    background-color: lightblue;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export default () => (
    <Header>Audio Mood Ring</Header>
);
