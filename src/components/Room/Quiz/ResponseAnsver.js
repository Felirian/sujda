import React from 'react';
import styled from 'styled-components';
import {COLORS} from "../../../styles/variables";
import {H1, P1, P3} from "../../../styles/textTags";
import FrameCard from "../../Shared/FrameCard";
import {QuizBtn} from "../../../pages/Quiz";

const ResponseAnswer = ({correctAnswer, QuizFunc, explanation}) => {

  return (
    <>
      <FrameCard green={correctAnswer}>
        <ResponseAnswerWr correctAnswer={correctAnswer}>
          <H1>{correctAnswer ? 'Вы правы!' : 'Вы неправы!'}</H1>
          <P3>Правильный ответ</P3>
          <P1>{explanation}</P1>
        </ResponseAnswerWr>
      </FrameCard>

      <QuizBtn
        disabled={QuizFunc.variables.selectedAnswer === null}
        style={{marginTop: '12.82vw'}}
        onClick={() => {
          QuizFunc.fun.nextQuestion(correctAnswer)
        }}
      >
        ДАЛЬШЕ
      </QuizBtn>

    </>

  );
};

const ResponseAnswerWr = styled.div`
  display: flex;
  flex-direction: column;
  text-align: start;
  padding: 0 7.18vw;
`

export default ResponseAnswer;

