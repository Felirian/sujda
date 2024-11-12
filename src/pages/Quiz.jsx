import React from 'react';
import styled from 'styled-components';
import Question from "../components/Room/Quiz/Question";
import {useQuizFunctions} from "../features/quiz";

const Quiz = ({data}) => {
  const QuizFunc = useQuizFunctions();

  return (
    <QuizWr>
      {QuizFunc.variables.currentQuestion === -1 ? (
        <>
          Start
          <button onClick={() => QuizFunc.fun.nextQuestion(false)}> ff </button>
        </>
      ) : QuizFunc.variables.currentQuestion === data.length ? (
        <>
          Конец {QuizFunc.variables.score}
          <button onClick={() => QuizFunc.fun.startOver()}> заново</button>
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
