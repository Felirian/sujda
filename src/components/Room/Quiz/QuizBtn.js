import React from 'react';
import styled from 'styled-components';

const QuizBtn = ({
  currentIndex,
  data,
  isAnswerCorrect,
  startQuiz,
  submitAnswer,
  nextQuestion,
  finishQuiz,
}) => {
  return (
    <QuizBtnWr>
      {/* Кнопка для старта */}
      {currentIndex === -1 && <Button onClick={startQuiz}>Начать</Button>}
      {currentIndex >= 0 && currentIndex < data.length && isAnswerCorrect === null && (
        <Button onClick={submitAnswer}>Отправить</Button>
      )}
      {isAnswerCorrect !== null &&
        (currentIndex < data.length - 1 || currentIndex === data.length - 1) && (
          <Button onClick={nextQuestion}>Далее</Button>
        )}
      {currentIndex >= data.length && <Button onClick={finishQuiz}>Завершить</Button>}
    </QuizBtnWr>
  );
};

export default QuizBtn;

const QuizBtnWr = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;
