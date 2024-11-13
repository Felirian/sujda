import React from 'react';
import SvgSelector from './SvgSelector';
import styled from 'styled-components';
import { COLORS } from '../../styles/variables';

const CancelButton = () => {
  return (
    <CancelButtonWr>
      <SvgSelector svg={'cross'} />
    </CancelButtonWr>
  );
};

export default CancelButton;

const CancelButtonWr = styled.div`
  display: flex;
  alaign-items: center;
  justify-content: center;
  background-color: ${COLORS.red};
  border-radius: 100%;
`;
