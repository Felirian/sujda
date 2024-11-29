import styled, { createGlobalStyle } from 'styled-components';
import { COLORS } from './variables';
import { H3 } from './textTags';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    //border: 1px pink solid;
  }

  html {
    scroll-behavior: smooth;
    scroll-padding: 0;
    overscroll-behavior: none !important;
  }

  body {
    width: 100%;
    height: 100svh;
    overflow:hidden;
    max-width: 100vw;
    background-color: ${COLORS.black};
    color: ${COLORS.white};
  }
  
  main {
    overflow-x: hidden;
    max-width: 100vw;
  }

  p,
  a,
  br,
  span,
  img,
  div,
  ul,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  input,
  textarea {
    color: ${COLORS.white};
  }

  button {
    -webkit-tap-highlight-color: transparent;
    cursor: pointer;
    outline: none;
    border: none;
    background: transparent;
    color: inherit;

    &:focus {

    }

    &:disabled {

    }
  }

  a {
    text-decoration: none;
    color: inherit;
    -webkit-tap-highlight-color: transparent;
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
`;

export default GlobalStyles;

export const WarningWr = styled.div`
  position: absolute;
  background-color: ${COLORS.dark};
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const WarningContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1vw;
`;

export const WarningH = styled(H3)`
  color: ${COLORS.white};
  text-transform: uppercase;
  text-align: center;
`;
