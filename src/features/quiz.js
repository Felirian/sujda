import { useState } from 'react';

const useQuiz = (data) => {
  const [quiz, setQuiz] = useState({
    currentIndex: -1, // индекс текущего вопроса (-1 означает, что викторина не началась)
    selectedAnswer: null, // выбранный ответ
    score: 0, // счет
    isAnswerCorrect: null, // булево значение для правильности ответа
  });

  // Функция для начала викторины
  const startQuiz = () => {
    setQuiz({ ...quiz, currentIndex: 0, score: 0, selectedAnswer: null, isAnswerCorrect: null });
  };

  // Функция для отправки ответа
  const submitAnswer = () => {
    const { currentIndex, selectedAnswer } = quiz;
    const isAnswerCorrect = selectedAnswer === data[currentIndex].right_answers - 1; // Индекс правильного ответа
    setQuiz((prev) => ({
      ...prev,
      isAnswerCorrect, // Обновляем состояние правильности ответа
      score: isAnswerCorrect ? prev.score + 1 : prev.score, // Увеличиваем счет, если ответ правильный
    }));
  };

  // Функция для перехода к следующему вопросу или завершения викторины
  const nextQuestion = () => {
    if (quiz.currentIndex < data.length - 1) {
      setQuiz((prev) => ({
        ...prev,
        currentIndex: prev.currentIndex + 1,
        selectedAnswer: null,
        isAnswerCorrect: null, // Сбрасываем правильность ответа
      }));
    } else {
      // Если вопросы закончились, показываем результаты
      setQuiz((prev) => ({
        ...prev,
        currentIndex: data.length, // Переходим к результатам
      }));
    }
  };

  // Функция для завершения викторины
  const finishQuiz = () => {
    setQuiz({ currentIndex: -1, selectedAnswer: null, score: 0, isAnswerCorrect: null });
  };

  return {
    quiz,
    startQuiz,
    submitAnswer,
    nextQuestion,
    finishQuiz,
    setSelectedAnswer: (answer) => setQuiz({ ...quiz, selectedAnswer: answer }),
  };
};

export default useQuiz;
