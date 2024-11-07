import React from 'react';
import { styled } from 'styled-components';
import { COLORS } from '../../styles/variables';

const Controls = () => {
  return <ControlsWr>Controls</ControlsWr>;
};

const ControlsWr = styled.div`
  height: 38vw;
  background-color: ${COLORS.green};
`;

export default Controls;
