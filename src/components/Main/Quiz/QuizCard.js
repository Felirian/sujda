import React from 'react';
import styled from 'styled-components';

const QuizCard = ({
  currentIndex,
  data,
  isAnswerCorrect,
  selectedAnswer,
  setSelectedAnswer,
  score,
}) => {
  const currentQuestion = data[currentIndex];

  return (
    <QuizCardWrapper isIncorrect={isAnswerCorrect === false}>
      {/* Стартовый экран */}
      {currentIndex === -1 && (
        <>
          <QH>Викторина</QH>
          <p>Мы предлагаем вам викторину. Готовы начать?</p>
        </>
      )}

      {/* Вопрос и ответы */}
      {currentIndex >= 0 && currentIndex < data.length && isAnswerCorrect === null && (
        <>
          <QuestionCounter>
            {currentIndex + 1}/{data.length}
          </QuestionCounter>
          <QH>Вопрос {currentIndex + 1}</QH>
          <p>{currentQuestion.text}</p>
          <AnswersCon>
            {currentQuestion.answers.map((answer, index) => (
              <label key={index}>
                <input
                  type="radio"
                  name="choice"
                  value={index}
                  checked={selectedAnswer === index}
                  onChange={() => setSelectedAnswer(index)}
                />
                {answer}
              </label>
            ))}
          </AnswersCon>
        </>
      )}

      {/* Правильный ответ и объяснение */}
      {currentIndex >= 0 && currentIndex < data.length && isAnswerCorrect !== null && (
        <>
          <QH>{isAnswerCorrect ? 'Вы правы!' : 'Вы неправы!'}</QH>
          <p>
            <b>Правильный ответ:</b>
          </p>
          <p>{currentQuestion.explanation}</p>
        </>
      )}

      {/* Результаты */}
      {currentIndex >= data.length && (
        <>
          <QH>Результаты</QH>
          <p>
            {score} правильно из {data.length}
          </p>
        </>
      )}
    </QuizCardWrapper>
  );
};

export default QuizCard;

const QuizCardWrapper = styled.div`
  position: relative;
  background-color: ${({ isIncorrect }) => (isIncorrect ? '#6C2929' : '#333E2C')};
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 90%;
  max-width: 400px;
  margin-bottom: 20px;

  p,
  b {
    color: #ffffff;
  }

  h1 {
    color: #f9ab00;
  }
`;

const QuestionCounter = styled.div`
  position: absolute;
  top: -35px;
  right: 0px;
  background-color: #f9ab00;
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 14px;
`;

const AnswersCon = styled.div`
  margin-bottom: 20px;
  label {
    display: block;
    margin: 10px 0;
    color: #ffffff;
  }

  input[type='radio'] {
    appearance: none;
    width: 18px;
    height: 18px;
    background-color: #ffffff;
    border-radius: 50%;
    outline: none;
    margin-right: 10px;
    position: relative;

    &:checked::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 10px;
      height: 10px;
      background-color: #ae4040;
      border-radius: 50%;
    }
  }
`;

const QH = styled.h1`
  margin-bottom: 20px;
  color: #f9ab00;
`;
