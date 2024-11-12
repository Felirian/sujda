import React from 'react';
import styled from 'styled-components';
import Question from "../components/Room/Quiz/Question";
import {useQuizFunctions} from "../features/quiz";
import {COLORS} from "../styles/variables";
import {H3} from "../styles/textTags";

const Quiz = ({data}) => {
  const QuizFunc = useQuizFunctions();

  return (
    <QuizWr>
      {QuizFunc.variables.currentQuestion === -1 ? (
        <>
          Start
          <QuizBtn onClick={() => QuizFunc.fun.nextQuestion(false)}>НАЧАТЬ</QuizBtn>
        </>
      ) : QuizFunc.variables.currentQuestion === data.length ? (
        <>
          Конец {QuizFunc.variables.score}

          <QuizBtn onClick={() => QuizFunc.fun.startOver()}> заново</QuizBtn>
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

export const QuizBtn = ({children, onClick}) => {
  return (
    <QuizBtnWr onClick={onClick}>
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

