import React from 'react';
import styled from 'styled-components';

const Loader = () => {
  return (
    <LoaderWr>
      <Spinner />
    </LoaderWr>
  );
};

const LoaderWr = styled.div`
  position: absolute;
  top: 46%;
  left: 50%;
  transform: translateX(-50%);
`;

const Spinner = styled.div`
  width: 2.87vw;
  height: 2.87vw;
  animation: spinning 2s infinite linear;
  border-radius: 2.87vw;
  box-shadow: 7.18vw 0vw 0 0 #ffffff, 4.46vw 5.59vw 0 0 #ffffff, -1.59vw 6.97vw 0 0 #ffffff,
    -6.46vw 3.08vw 0 0 #ffffff, -6.46vw -3.08vw 0 0 #ffffff, -1.59vw -6.97vw 0 0 #ffffff,
    4.46vw -5.59vw 0 0 #ffffff;
  opacity: 0.7;
  @keyframes spinning {
    to {
      transform: rotate(360deg);
    }
  }
`;

export default Loader;
