import React from 'react';
import styled from 'styled-components';
import { H1, P1, P3 } from '../../../styles/textTags';
import FrameCard from '../../Shared/FrameCard';
import { QuizBtn } from '../../../pages/Quiz';
import feather from '../../../assets/quiz/feather.png';

const ResponseAnswer = ({ correctAnswer, QuizFunc, explanation }) => {
  return (
    <>
      <FrameCard green={correctAnswer}>
        <ResponseAnswerWr correctAnswer={correctAnswer}>
          <FeatherImg src={feather} alt={'feather'} />
          <H1Styled>{correctAnswer ? 'Вы правы!' : 'Вы неправы!'}</H1Styled>
          <P3Styled>Правильный ответ</P3Styled>
          <P1Styled>{explanation}</P1Styled>
        </ResponseAnswerWr>
      </FrameCard>

      <QuizBtn
        disabled={QuizFunc.variables.selectedAnswer === null}
        style={{ marginTop: '12.82vw' }}
        onClick={() => {
          QuizFunc.fun.nextQuestion(correctAnswer);
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
  padding: 10vw 7.18vw 0 7.18vw;
  position: relative;
  align-items: center;
`;
const H1Styled = styled(H1)`
  margin-bottom: 4.5vw;
`;

const P3Styled = styled(P3)`
  text-align: left;
  margin-bottom: 3vw;
`;

const P1Styled = styled(P1)`
  text-align: left;
`;

const FeatherImg = styled.img`
  width: 20.5vw;
  height: 20.5vw;
  object-fit: cover;
  object-position: bottom;
  pointer-events: none;
  position: absolute;
  z-index: 1;
  top: -10vw;
  left: 50%;
  transform: translateX(-50%);
`;

export default ResponseAnswer;
