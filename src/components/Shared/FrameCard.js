import React from 'react';
import styled from 'styled-components';
import SvgSelector from './SvgSelector';
import { COLORS } from '../../styles/variables';

const FrameCard = ({ children , green = true}) => {
  return (
    <FrameCardWr>
      <SvgSelector svg={green ? 'topFrameGreen' : 'topFrameRed'} />
      <FrameCardContainer green={green}>
        <FrameCardBox green={green}>{children}</FrameCardBox>
      </FrameCardContainer>
      <SvgSelector svg={green ? 'bottomFrameGreen' : 'bottomFrameRed'} />
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
  background-color: ${(props) => props.green ? COLORS.green : COLORS.darkRed};
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: -0.5vw 0;
  padding: 0 1.795vw;
`;

const FrameCardBox = styled.div`
  background-color: ${(props) => props.green ? COLORS.green : COLORS.darkRed};
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 0.3vw solid ${COLORS.sand};
  border-left: 0.3vw solid ${COLORS.sand};
`;
