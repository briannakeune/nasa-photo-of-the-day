import React from 'react';
import Nav from './Nav';
import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
from {
  opacity: 0;
  transform: translate3d(-10%, 0, 0);
}

to {
  opacity: 1;;
  transform: translate3d(0, 0, 0);
}

`;

const FadeIn = styled.h1`
  animation: ${fadeIn} 1s;
`;

export default function Header () {
    return(
        <div className="navBar">
            <FadeIn><h1>APOD</h1></FadeIn>
            <div className="merp">
            <Nav />
            </div>
        </div>
    )
}