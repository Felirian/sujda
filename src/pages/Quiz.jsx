import React from 'react';
import styled from 'styled-components';
import useQuiz from '../features/quiz';

const Quiz = ({ data }) => {
  const { quiz, startQuiz, submitAnswer, nextQuestion, finishQuiz, setSelectedAnswer } =
    useQuiz(data);
  const { currentIndex, selectedAnswer, score, isAnswerCorrect } = quiz;

  const renderContent = () => {
    const currentQuestion = data[currentIndex];

    return (
      <>
        <QuizWr>
          <QuizCard isIncorrect={currentIndex >= data.length ? false : isAnswerCorrect === false}>
            {/* Стартовый экран */}
            {currentIndex === -1 && (
              <>
                <QH>Викторина</QH>
                <p>Мы предлагаем вам викторину</p>
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

            {currentIndex >= 0 && currentIndex < data.length && isAnswerCorrect !== null && (
              <>
                <QH>{isAnswerCorrect ? 'Вы правы!' : 'Вы неправы!'}</QH>
                <p>
                  <b>Правильный ответ:</b>
                </p>
                <p>{currentQuestion.explanation}</p>
              </>
            )}

            {/* Результаты викторины */}
            {currentIndex >= data.length && (
              <>
                <QH>Результаты</QH>
                <p>
                  {score} правильно из {data.length}
                </p>
              </>
            )}
          </QuizCard>

          <ButtonContainer>
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
          </ButtonContainer>
        </QuizWr>
      </>
    );
  };

  return renderContent();
};

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

const QuizCard = styled.div`
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

const ButtonContainer = styled.div`
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

export default Quiz;
