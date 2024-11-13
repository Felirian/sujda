import React from 'react';
import styled from 'styled-components';
import Question from "../components/Room/Quiz/Question";
import {useQuizFunctions} from "../features/quiz";
import {COLORS} from "../styles/variables";
import {H1, H3, P1, P3} from "../styles/textTags";
import FrameCard from "../components/Shared/FrameCard";

const Quiz = ({data}) => {
  const QuizFunc = useQuizFunctions();

  return (
    <QuizWr>
      {QuizFunc.variables.currentQuestion === -1 ? (
        <>
          <FrameCard>
            <StartPageWr>
              <H1>Викторина</H1>
              <P1>Мы предлагаем Вам пройти викторину текст текст текст текст текст текст текст</P1>
            </StartPageWr>
          </FrameCard>
          <QuizBtn
            style={{marginTop: '12.82vw'}}
            onClick={() => QuizFunc.fun.nextQuestion(false)}
          >
            НАЧАТЬ
          </QuizBtn>
        </>
      ) : QuizFunc.variables.currentQuestion === data.length ? (
        <>
          <FrameCard >
            <StartPageWr>
              <H1>Результаты</H1>

              <P1>{QuizFunc.variables.score}</P1>
            </StartPageWr>
          </FrameCard>

          <QuizBtn
            style={{marginTop: '12.82vw'}}
            onClick={() => QuizFunc.fun.startOver()}
          >
            ЗАВЕРШИТЬ
          </QuizBtn>
        </>
      ) : (
        <>
          <Question question={data[QuizFunc.variables.currentQuestion]} QuizFunc={QuizFunc}/>
        </>
      )}
    </QuizWr>
  );
};

export default Quiz;

const StartPageWr = styled.div`
  display: flex;
  flex-direction: column;
  //justify-content: center;
  //align-items: center;
  text-align: start;
  width: 100%;
  gap: 4.62vw;
  padding: 0 7.18vw;
`;

const QuizWr = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-image: url('/img/quiz-bg.png');
  background-size: cover;
  background-position: center;
`;

export const QuizBtn = ({children, onClick, ...props}) => {
  return (
    <QuizBtnWr
      {...props}
      onClick={onClick}
    >
      <QuizCon>
        <H3>{children}</H3>
      </QuizCon>
    </QuizBtnWr>
  );
}

const QuizBtnWr = styled.button`
  background-color: ${COLORS.lightSand};
  width: 51.28vw;
  height: 10.26vw;
  padding: 0.77vw;
  &:active {
    background-color: #D7BF99;
  } 
  &:disabled {
    opacity: 0.5;
  }
`

const QuizCon = styled.div`
  width: 100%;
  height: 100%;
  border: 0.26vw solid ${COLORS.brown};
  display: flex;
  align-items: center;
  justify-content: center;
  ${H3} {
    color: ${COLORS.brown};
    font-weight: 600;
  }
`

