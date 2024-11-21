import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../styles/variables';
import SvgSelector from './SvgSelector';

const LongFrameCard = ({ closeble, children }) => {
  return (
    <LongFrameCardWr>
      <SvgWrapper>
        <SvgSelector svg={'topLongFrameGreen'} />
      </SvgWrapper>
      <LongFrameCardContainer>{children}</LongFrameCardContainer>
    </LongFrameCardWr>
  );
};

export default LongFrameCard;

const LongFrameCardWr = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  z-index: 999;
`;

const SvgWrapper = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: -0.5vw;

  & > svg {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`;

const LongFrameCardContainer = styled.div`
  background-color: ${COLORS.green};
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 5.641vw 5.641vw 5.641vw;
  flex-grow: 1;
`;
