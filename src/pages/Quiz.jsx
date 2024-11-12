import React from 'react';
import styled from 'styled-components';
import Question from "../components/Room/Quiz/Question";
import {useQuizFunctions} from "../features/quiz";
import ResponseAnswer from "../components/Room/Quiz/ResponseAnsver";

const Quiz = ({data}) => {
  const QuizFunc = useQuizFunctions();

  return (
    <QuizWr>
      {QuizFunc.currentQuestion === -1 ? (
        <>
          Start
          <button onClick={() => QuizFunc.nextQuestion(false)}> ff </button>
        </>
      ) : QuizFunc.currentQuestion === data.length ? (
        <>
          Конец {QuizFunc.score}
          <button onClick={() => QuizFunc.startOver()}> заново</button>
        </>
      ) : QuizFunc.answered ? (
        <>
          <ResponseAnswer correctAnswer={false} QuizFunc={QuizFunc}/>
        </>
      ) : (
        <>
          <Question question={data[QuizFunc.currentQuestion]} QuizFunc={QuizFunc}/>
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
