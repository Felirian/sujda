import React, {useState} from 'react';
import {H1, P2} from "../../../styles/textTags";
import styled from "styled-components";
import ResponseAnswer from "./ResponseAnsver";

const Question = ({question, QuizFunc}) => {


  return (
    <>
      {
        QuizFunc.variables.answered ? (
          <>
            <ResponseAnswer
              correctAnswer={QuizFunc.variables.selectedAnswer === question.right_answers}
              QuizFunc={QuizFunc}
            />
          </>
        ) : (
          <>
            <H1>Вопрос {QuizFunc.variables.currentQuestion + 1}</H1>
            <P2>{question.text}</P2>
            {question.answers.map((answer, i) => (
              <AnswersCon key={i} onClick={() => QuizFunc.fun.setSelectedAnswer(i)}>
                <input
                  type="radio"
                  name="quizAnswer"
                  value={i}
                  onChange={() => QuizFunc.fun.setSelectedAnswer(i)}
                  checked={QuizFunc.variables.selectedAnswer === i}
                />
                {answer}
              </AnswersCon>
            ))}
            <button
              onClick={() =>  QuizFunc.fun.sendAnswer(true)}
            >
              ответить
            </button>
          </>
        )
      }

    </>
  );
};

const AnswersCon = styled.div`
  display: flex;
  margin-bottom: 20px;
`

export default Question;
