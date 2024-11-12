import React from 'react';
import { H3 } from '../../styles/textTags';
import styled from 'styled-components';
import { COLORS } from '../../styles/variables';

const CustomButton = ({ type, children }) => {
  return (
    <ButtonWr type={type}>
      <ButtonCon type={type}>
        <H3Styled type={type}>{children}</H3Styled>
      </ButtonCon>
    </ButtonWr>
  );
};

export default CustomButton;

const ButtonWr = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  height: 10.26vw;
  width: 100%;
  border: ${({ type }) => (type === 'orange' ? '0.3vw' : '0px')}; solid ${({ type }) =>
  type === 'orange' ? COLORS.black : null};
  background-color: ${({ type }) => (type === 'orange' ? COLORS.orange : COLORS.sand)};
  transition: background-color 0.3s ease;
  
  &:active {
    background-color: ${({ type }) => (type === 'orange' ? COLORS.darkOrange : COLORS.darkSand)};
  }
`;

const ButtonCon = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  width: 100%;
  padding: 1.2vw;
  border: ${({ type }) =>
    type === 'send' ? 'none' : `0.3vw solid ${type === 'orange' ? COLORS.black : COLORS.grey}`};
`;

const H3Styled = styled(H3)`
  color: ${({ type }) => (type === 'orange' ? COLORS.black : COLORS.grey)};
  text-transform: uppercase;
  font-weight: 600;
  white-space: nowrap;
`;
