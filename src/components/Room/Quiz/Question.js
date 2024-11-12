import React, {useState} from 'react';
import {H1, P2} from "../../../styles/textTags";
import styled from "styled-components";
import ResponseAnswer from "./ResponseAnsver";

const Question = ({question, QuizFunc}) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null)

  return (
    <>
      <H1>Вопрос {QuizFunc.currentQuestion + 1}</H1>
      <P2>{question.text}</P2>
      {question.answers.map((answer, i) => (
        <AnswersCon key={i} onClick={() => setSelectedAnswer(i)}>
          <input
            type="radio"
            name="quizAnswer"
            value={i}
            onChange={() => setSelectedAnswer(i)}
            checked={selectedAnswer === i}
          />
          {answer}
        </AnswersCon>
      ))}
      <button
        onClick={() => QuizFunc.sendQuestion(selectedAnswer === question.right_answers)}
      >
        ответить
      </button>
    </>
  );
};

const AnswersCon = styled.div`
  display: flex;
  margin-bottom: 20px;
`

export default Question;
