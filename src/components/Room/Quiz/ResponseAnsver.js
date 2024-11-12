import React from 'react';
import styled from 'styled-components';
import {COLORS} from "../../../styles/variables";

const ResponseAnswer = ({ correctAnswer , QuizFunc}) => {

  return (
    <ResponseAnswerWr correctAnswer={correctAnswer}>
      {correctAnswer.toString()}
      <button onClick={() => QuizFunc.nextQuestion()}>Dalee</button>
    </ResponseAnswerWr>
  );
};

const ResponseAnswerWr = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props)=> props.correctAnswer ? COLORS.green : COLORS.red};
`

export default ResponseAnswer;

