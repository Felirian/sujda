import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Quiz = ({ data }) => {
  // Состояния для отслеживания текущего вопроса, выбранного ответа, счета и состояния викторины
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(-1);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [quizState, setQuizState] = useState('start');
  const navigate = useNavigate();

  // Обработчик для начала викторины
  const handleStartQuiz = () => {
    setQuizState('question');
    setCurrentQuestionIndex(0);
  };

  // Обработчик для отправки ответа на текущий вопрос
  const handleAnswerSubmit = () => {
    const currentQuestion = data[currentQuestionIndex];
    if (selectedAnswer === currentQuestion.right_answers - 1) {
      setScore(score + 1);
      setQuizState('correct');
    } else {
      setQuizState('incorrect');
    }
  };

  // Обработчик для перехода к следующему вопросу или завершению викторины
  const handleNextQuestion = () => {
    if (currentQuestionIndex < data.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setQuizState('question');
    } else {
      setQuizState('results');
    }
  };

  // Обработчик для завершения викторины и перехода на главную страницу
  const handleFinishQuiz = () => {
    navigate('/');
  };

  // Рендеринг начального экрана викторины
  const renderStartScreen = () => (
    <>
      <QH>Викторина</QH>
      <p>Мы предлагаем вам викторину</p>
    </>
  );

  // Рендеринг экрана с вопросом
  const renderQuestionScreen = () => {
    const currentQuestion = data[currentQuestionIndex];
    return (
      <>
        <QH>Вопрос {currentQuestionIndex + 1}</QH>
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
    );
  };

  // Рендеринг экрана с результатами викторины
  const renderResultScreen = () => (
    <>
      <QH>Результаты</QH>
      <p>
        {score} правильно из {data.length}
      </p>
    </>
  );

  // Рендеринг экрана с обратной связью (правильный/неправильный ответ)
  const renderFeedbackScreen = (isCorrect) => {
    const currentQuestion = data[currentQuestionIndex];
    return (
      <>
        <QH>{isCorrect ? 'Вы правы!' : 'Вы неправы!'}</QH>
        <p>
          <b>Правильный ответ</b>
        </p>
        <p>{currentQuestion.explanation}</p>
      </>
    );
  };

  // Основной рендеринг компонента Quiz
  return (
    <QuizWr>
      <QuizCard quizState={quizState}>
        {/* Отображение счетчика вопросов, если текущее состояние - вопрос */}
        {quizState === 'question' && (
          <QuestionCounter>
            {currentQuestionIndex + 1}/{data.length}
          </QuestionCounter>
        )}
        {/* Отображение соответствующего экрана в зависимости от состояния викторины */}
        {quizState === 'start' && renderStartScreen()}
        {quizState === 'question' && renderQuestionScreen()}
        {quizState === 'correct' && renderFeedbackScreen(true)}
        {quizState === 'incorrect' && renderFeedbackScreen(false)}
        {quizState === 'results' && renderResultScreen()}
      </QuizCard>
      {/* Отображение соответствующих кнопок в зависимости от состояния викторины */}
      {quizState === 'start' && <Button onClick={handleStartQuiz}>Начать</Button>}
      {quizState === 'question' && <Button onClick={handleAnswerSubmit}>Отправить</Button>}
      {(quizState === 'correct' || quizState === 'incorrect') && (
        <Button onClick={handleNextQuestion}>Далее</Button>
      )}
      {quizState === 'results' && <Button onClick={handleFinishQuiz}>Завершить</Button>}
    </QuizWr>
  );
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
  background-color: ${({ quizState }) => (quizState === 'incorrect' ? '#6C2929' : '#333E2C')};
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

const QuestionsCon = styled.div`
  margin-bottom: 20px;
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
