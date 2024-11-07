import React, { useState } from 'react';
import styled from 'styled-components';

const QuizCard = ({ quizData }) => {
  const [currentIndex, setCurrentIndex] = useState(-1);

  const handleNext = () => {
    if (currentIndex < quizData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <CardWrapper>
      {currentIndex === -1 ? (
        <>
          <StartMessage>Хотите пройти викторину?</StartMessage>
          <StartButton onClick={() => setCurrentIndex(0)}>Начать</StartButton>
        </>
      ) : (
        <>
          <QuestionWrapper>
            <Question>{quizData[currentIndex].text}</Question>
            <Answers>
              {quizData[currentIndex].answers.map((answer, answerIndex) => (
                <Answer key={answerIndex}>
                  <input
                    type="radio"
                    name={`quiz-${currentIndex}`}
                    id={`answer-${currentIndex}-${answerIndex}`}
                  />
                  <label htmlFor={`answer-${currentIndex}-${answerIndex}`}>{answer}</label>
                </Answer>
              ))}
            </Answers>
            <Explanation>{quizData[currentIndex].explanation}</Explanation>
          </QuestionWrapper>
          <NextButton onClick={handleNext}>Далее</NextButton>
        </>
      )}
    </CardWrapper>
  );
};

export default QuizCard;

const CardWrapper = styled.div`
  background-color: #000;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  width: 100%;
  text-align: center;
`;

const QuestionWrapper = styled.div`
  margin-bottom: 20px;
`;

const Question = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 20px;
`;

const Answers = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
`;

const Answer = styled.div`
  display: flex;
  align-items: center;

  input[type='radio'] {
    margin-right: 10px;
  }
`;

const Explanation = styled.p`
  font-size: 1rem;
  color: #666;
`;

const StartMessage = styled.p`
  font-size: 1.2rem;
  margin-bottom: 20px;
`;

const StartButton = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
`;

const NextButton = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  background-color: #28a745;
  color: #fff;
  border: none;
  border-radius: 5px;
`;
