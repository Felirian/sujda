import { useState } from 'react';

const useQuiz = (data) => {
  const [currentIndex, setCurrentIndex] = useState(-1); // индекс текущего вопроса (-1 означает, что викторина не началась)
  const [score, setScore] = useState(0); // счет

  // Функция для начала викторины
  const startQuiz = () => {
    setCurrentIndex(0);
    setScore(0);
  };

  // Функция для отправки ответа
  const submitAnswer = (selectedAnswer) => {
    const correctAnswerIndex = data[currentIndex].right_answers - 1;
    const isCorrect = selectedAnswer === correctAnswerIndex;

    if (isCorrect) {
      setScore(score + 1);
    }

    return isCorrect; // Возвращаем результат проверки
  };

  // Функция для перехода к следующему вопросу или завершения викторины
  const nextQuestion = () => {
    if (currentIndex < data.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(-2); // -2 означает, что викторина завершена
    }
  };

  // Функция для завершения викторины
  const finishQuiz = () => {
    setCurrentIndex(-1);
    setScore(0);
  };

  return {
    currentIndex,
    score,
    startQuiz,
    submitAnswer,
    nextQuestion,
    finishQuiz,
  };
};

export default useQuiz;
