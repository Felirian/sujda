import React from 'react';
import styled from 'styled-components';
import { P3 } from '../../../styles/textTags';
import { COLORS } from '../../../styles/variables';

const QuestionCounter = ({ currentQuestion, totalQuestions }) => {
  return (
    <CounterWr>
      <P3>{`${currentQuestion + 1}/${totalQuestions}`}</P3>
    </CounterWr>
  );
};

const CounterWr = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  with: 12.8vw;
  height: 11.5vw;
  padding: 1.5vw;
  background-color: ${COLORS.yellow};
  margin: 0 4.103vw 3vw auto;
  ${P3} {
    color: ${COLORS.white};
  }
`;

export default QuestionCounter;
