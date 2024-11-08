import React, { useState } from 'react';
import styled from 'styled-components';

const QuizCard = ({ quizData }) => {
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [pointsEarned, setPointsEarned] = useState(0);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleAnswerChange = (event) => {
    const selectedAnswerIndex = parseInt(event.target.value, 10);
    setSelectedAnswer(selectedAnswerIndex);
  };

  const handleSubmitAnswer = () => {
    const isCorrect = selectedAnswer === quizData[currentIndex].right_answers - 1;
    setIsAnswerCorrect(isCorrect);
    if (isCorrect) {
      setPointsEarned(pointsEarned + 1);
    }
  };

  const handleNext = () => {
    setIsAnswerCorrect(null);
    setSelectedAnswer(null);
    if (currentIndex < quizData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(-2);
    }
  };

  return (
    <CardWrapper>
      {currentIndex === -1 ? (
        <>
          <StartMessage>Хотите пройти викторину?</StartMessage>
          <StartButton onClick={() => setCurrentIndex(0)}>Начать</StartButton>
        </>
      ) : currentIndex === -2 ? (
        <ResultsWrapper>
          <ResultMessage>Викторина завершена!</ResultMessage>
          <ResultPoints>Ваши баллы: {pointsEarned}</ResultPoints>
          <StartButton onClick={() => setCurrentIndex(-1)}>Завершить</StartButton>
        </ResultsWrapper>
      ) : (
        <>
          {isAnswerCorrect === null ? (
            <>
              <QuestionWrapper>
                <Question>{quizData[currentIndex].text}</Question>
                <Answers>
                  {quizData[currentIndex].answers.map((answer, answerIndex) => (
                    <AnswerLabel key={answerIndex}>
                      <input
                        type="radio"
                        name="quizAnswer"
                        value={answerIndex}
                        onChange={handleAnswerChange}
                        checked={selectedAnswer === answerIndex}
                      />
                      {answer}
                    </AnswerLabel>
                  ))}
                </Answers>
                <SubmitButton onClick={handleSubmitAnswer} disabled={selectedAnswer === null}>
                  Отправить
                </SubmitButton>
              </QuestionWrapper>
            </>
          ) : (
            <ExplanationCard>
              <h1>{isAnswerCorrect ? 'Вы правы!' : 'Вы неправы!'}</h1>
              <Explanation>{quizData[currentIndex].explanation}</Explanation>
              <NextButton onClick={handleNext}>Далее</NextButton>
            </ExplanationCard>
          )}
        </>
      )}
    </CardWrapper>
  );
};

export default QuizCard;

// Стили остаются прежними
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

const AnswerLabel = styled.label`
  display: flex;
  align-items: center;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;

  input[type='radio'] {
    margin-right: 10px;
  }
`;

const ExplanationCard = styled.div`
  margin-top: 20px;
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
  background-color: #28a 745;
  color: #fff;
  border: none;
  border-radius: 5px;
`;

const ResultsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const ResultMessage = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
`;

const ResultPoints = styled.p`
  font-size: 1.2rem;
  color: #666;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  background-color: #17a2b8;
  color: #fff;
  border: none;
  border-radius: 5px;
  margin-top: 10px;
`;
