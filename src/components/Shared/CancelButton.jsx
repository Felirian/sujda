import React from 'react';
import SvgSelector from './SvgSelector';
import styled from 'styled-components';
import { COLORS } from '../../styles/variables';

const CancelButton = ({onClick}) => {
  return (
    <CancelButtonWr onClick={onClick}>
      <SvgSelector svg={'cross'} />
    </CancelButtonWr>
  );
};

export default CancelButton;

const CancelButtonWr = styled.div`
  display: flex;
  width: 10vw;
  height: 10vw;
  align-items: center;
  justify-content: center;
  background-color: ${COLORS.red};
  border-radius: 100%;

  z-index: 999 !important;
  & > svg {
    width: 5vw;
    height: 5vw;
  }
`;