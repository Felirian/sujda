import React from 'react';
import { H3 } from '../../styles/textTags';
import styled from 'styled-components';
import { COLORS } from '../../styles/variables';

const ArrowButton = ({ children }) => {
  return (
    <ArrowButtonWr>
      <InnerButton>
        <H3Styled>{children}</H3Styled>
      </InnerButton>
    </ArrowButtonWr>
  );
};

export default ArrowButton;

const ArrowButtonWr = styled.div`
  display: flex;
  align-items: center;
  height: 9.8vw;
  width: 70vw;
  margin: 0 auto;
  background-color: ${COLORS.green};
  position: relative;
  transition: background-color 0.3s ease;
  z-index: 1;
   border-radius: 1px;

  &:active {
    background-color: ${COLORS.green};
  }

  &:before {
    content: '';
    position: absolute;
    top: 1.4vw;
    right: -3.5vw;
    width: 7vw;
    height: 7vw;
    background-color: ${COLORS.green};
    transform: rotate(-45deg);
    z-index: 0;
    border-radius: 1.5px;
  }
`;

const InnerButton = styled.div`
  display: flex;
  align-items: center;
  margin: 0vw 1vw;
  width: 100%;
  padding: 0.5vw 3vw;
  background-color: ${COLORS.green};
  border: 1px solid ${COLORS.white};
  position: relative;
    border-radius: 1px;

  &:after {
    content: '';
    position: absolute;
    top: 0.8vw;
    //top: 12%;
    right: -3.2vw;
    width: 5.5vw;
    height: 5.5vw;
    border: 1px solid ${COLORS.white};
    background-color: ${COLORS.green};
    transform: rotate(-45deg);
    border-radius: 1.5px;
  }

  &:before {
    content: '';
    position: absolute;
    top: vw;
    right: -0.2vw;
    width: 7vw;
    height: 100%;
    background-color: ${COLORS.green};
    transform: rotate(0deg);
    z-index: 2;
  }
`;

const H3Styled = styled(H3)`
  color: ${COLORS.white};
  text-transform: uppercase;
  font-weight: 600;
  white-space: nowrap;
`;
