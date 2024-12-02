import React from 'react';
import { ButtonTextStyle, H3 } from '../../styles/textTags';
import styled from 'styled-components';
import { COLORS } from '../../styles/variables';
import SvgSelector from './SvgSelector';
import { Link } from 'react-router-dom';

const CustomButton = ({ text, onClick, size, color, link, style, disabled }) => {
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

  const handleClick = (event) => {
    if (disabled) {
      event.preventDefault();
      return;
    }
    if (onClick) {
      onClick(event);
    }
  };

  return (
    <ButtonWr
      disabled={disabled}
      style={style}
      size={size}
      color={color}
      onClick={handleClick}
      to={link}
    >
      <SvgBackground svg={svgString} />
      <H3Styled color={color}>{text}</H3Styled>
    </ButtonWr>
  );
};

export default CustomButton;

const ButtonWr = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  transition: background-color 0.3s ease;
  position: relative;
  overflow: hidden;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};
  svg {
    height: 14.615vw;
    width: ${({ size }) =>
      size === 'small' ? '27.692vw' : size === 'medium' ? '78.462vw' : '90vw'};
    path {
      fill: ${({ color }) =>
        color === 'darkGreen'
          ? COLORS.green
          : color === 'yellow'
          ? COLORS.yellow
          : COLORS.sand} !important;
    }
  }
`;

const H3Styled = styled(H3)`
  ${ButtonTextStyle};
  position: absolute;
  color: ${({ color }) =>
    color === 'darkGreen'
      ? COLORS.sand
      : color === 'yellow'
      ? COLORS.green
      : COLORS.green} !important;
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
