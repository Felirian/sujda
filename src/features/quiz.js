import { useState } from 'react';

export const useQuizFunctions = () => {
  const [currentQuestion, setCurrentQuestion] = useState(-1);
  const [score, setScore] = useState(0);
  const [responseAnswer, setResponseAnswer] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [answered, setAnswered] = useState(false)

  const sendAnswer = (boll) => {
    setAnswered(boll)
  };

  const nextQuestion = (isCorrect) => {
    setAnswered(false)
    setSelectedAnswer(null)
    setCurrentQuestion(currentQuestion + 1);
    if (isCorrect) {
      setScore(score + 1);
    }
  };

  const startOver = () => {
    setCurrentQuestion(-1);
    setScore(0);
  };

  return {
    variables : {
      currentQuestion,
      score,
      responseAnswer,
      answered,
      selectedAnswer
    },
    fun: {
      nextQuestion,
      startOver,
      sendAnswer,
      setSelectedAnswer
    }
  };
};
