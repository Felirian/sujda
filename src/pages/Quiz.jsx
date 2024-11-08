import React from 'react';
import styled from 'styled-components';
import QuizCard from '../components/Main/Quiz/QuizCard';
import { QUIZ_DATA_1 } from '../features/data'; 

const Quiz = () => {
  return (
    <QuizWr>
      <QuizCard quizData={QUIZ_DATA_1} />
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
