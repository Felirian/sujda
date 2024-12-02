import React from 'react';
import { H3 } from '../../styles/textTags';
import styled from 'styled-components';
import { COLORS } from '../../styles/variables';
import SvgSelector from './SvgSelector';

const CustomButton = ({ children, onClick, size, color }) => {
  let svgString;
  if (size === 'large') {
    svgString = 'buttonLarge';
  } else if (size === 'medium') {
    svgString = 'buttonMedium';
  } else if (size === 'small') {
    svgString = 'buttonSmall';
  } else {
    svgString = 'buttonSmall';
  }

  return (
    <ButtonWr size={size} color={color} onClick={onClick}>
      <SvgBackground svg={svgString} color={COLORS[color]} />

      <H3Styled>{children}</H3Styled>
    </ButtonWr>
  );
};

export default CustomButton;

const ButtonWr = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: ${({ size }) => (size === 'small' ? '27.692vw' : size === 'medium' ? '78.462vw' : '90vw')};
  background-color: transparent;
  transition: background-color 0.3s ease;
  position: relative;
  overflow: hidden;

  &:active {
    background-color: ${({ color }) => (color === 'yelow' ? COLORS.darkGreen : COLORS.green)};
  }
`;

const H3Styled = styled(H3)`
  position: absolute;
  color: ${COLORS.black};
  text-transform: uppercase;
  font-weight: 600;
  white-space: nowrap;
`;

const SvgBackground = styled(SvgSelector)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;
