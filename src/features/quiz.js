import { useState } from 'react';

export const useQuizFunctions = () => {
  const [currentQuestion, setCurrentQuestion] = useState(-1);
  const [score, setScore] = useState(0);
  const [responseAnswer, setResponseAnswer] = useState(false);
  const [answered, setAnswered] = useState(false)

  const sendQuestion = (isCorrect) => {
    setAnswered(true)
    if (isCorrect) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    setAnswered(false)
    setCurrentQuestion(currentQuestion + 1);
  };

  const startOver = () => {
    setCurrentQuestion(-1);
    setScore(0);
  };

  return {
    currentQuestion,
    score,
    nextQuestion,
    startOver,
    responseAnswer,
    answered,
    sendQuestion
  };
};
