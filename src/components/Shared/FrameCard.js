import React from 'react';
import styled from 'styled-components';
import SvgSelector from './SvgSelector';
import { COLORS } from '../../styles/variables';

const FrameCard = ({ children }) => {
  return (
    <FrameCardWr>
      <SvgSelector svg={'topframe'} />
      <FrameCardContainer>
        <FrameCardBox>{children}</FrameCardBox>
      </FrameCardContainer>
      <SvgSelector svg={'bottomframe'} />
    </FrameCardWr>
  );
};

export default FrameCard;

const FrameCardWr = styled.div`
  display: flex;
  flex-direction: column;
  width: 92vw;

  & > svg {
    width: 100%;
    height: auto;
  }
`;

const FrameCardContainer = styled.div`
  background-color: ${COLORS.green};
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: -0.5vw 0;
  padding: 0 1.795vw;
`;

const FrameCardBox = styled.div`
  background-color: ${COLORS.green};
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 0.3vw solid ${COLORS.sand};
  border-left: 0.3vw solid ${COLORS.sand};
`;
