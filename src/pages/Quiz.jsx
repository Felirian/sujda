import React from 'react';
import styled from 'styled-components';
import useQuiz from '../features/quiz';
import QuizCard from '../components/Main/Quiz/QuizCard'; 
import QuizBtn from '../components/Main/Quiz/QuizBtn';

const Quiz = ({ data }) => {
  const { quiz, startQuiz, submitAnswer, nextQuestion, finishQuiz, setSelectedAnswer } = useQuiz(data);
  const { currentIndex, selectedAnswer, score, isAnswerCorrect } = quiz;

  return (
    <QuizWr>
      <QuizCard
        currentIndex={currentIndex}
        data={data}
        isAnswerCorrect={isAnswerCorrect}
        selectedAnswer={selectedAnswer}
        setSelectedAnswer={setSelectedAnswer}
        score={score} // Передаем счет
      />
      <QuizBtn
        currentIndex={currentIndex}
        data={data}
        isAnswerCorrect={isAnswerCorrect}
        startQuiz={startQuiz}
        submitAnswer={submitAnswer}
        nextQuestion={nextQuestion}
        finishQuiz={finishQuiz}
      />
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
