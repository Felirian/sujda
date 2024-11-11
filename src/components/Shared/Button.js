import React from 'react';
import { H3 } from '../../styles/textTags';
import styled from 'styled-components';
import { COLORS } from '../../styles/variables';

const Button = ({ type, children }) => {
  return (
    <ButtonWr type={type}>
      <ButtonCon type={type}>
        <H3Styled type={type}>{children}</H3Styled>
      </ButtonCon>
    </ButtonWr>
  );
};

export default Button;

const ButtonWr = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  width: 51.2821vw;
  height: 10.2564vw;
  padding: 3px;
  border: ${({ type }) => (type === 'orange' ? '1px' : '0px')}; solid ${({ type }) =>
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
  padding: 3px;
  border: ${({ type }) =>
    type === 'send' ? 'none' : `1px solid ${type === 'orange' ? COLORS.black : COLORS.grey}`};
`;

const H3Styled = styled(H3)`
  color: ${({ type }) => (type === 'orange' ? COLORS.black : COLORS.grey)};
  text-transform: uppercase;
  font-weight: 600;
`;
