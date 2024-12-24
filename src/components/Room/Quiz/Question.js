import React from 'react';
import { H1, H3, P2 } from '../../../styles/textTags';
import styled from 'styled-components';
import ResponseAnswer from './ResponseAnsver';
import FrameCard from '../../Shared/FrameCard';
import { COLORS } from '../../../styles/variables';
import { QuizBtn } from '../../../pages/Quiz';
import CustomButton from '../../Shared/CustomButton';

const Question = ({ totalQuestions, question, QuizFunc }) => {
  return (
    <>
      {QuizFunc.variables.answered ? (
        <>
          <ResponseAnswer
            explanation={question.explanation}
            correctAnswer={QuizFunc.variables.selectedAnswer === question.right_answers}
            QuizFunc={QuizFunc}

          />
        </>
      ) : (
        <>
          <FrameCard>
            <QuestionWr>
              <H1>Вопрос {QuizFunc.variables.currentQuestion + 1} из {totalQuestions}</H1>
              <P2>{question.text}</P2>
              <AnswersCon>
                {question.answers.map((answer, i) => (
                  <AnswersBlock key={i} onClick={() => QuizFunc.fun.setSelectedAnswer(i)}>
                    <StyledInput
                      type='radio'
                      name='quizAnswer'
                      value={i}
                      onChange={() => QuizFunc.fun.setSelectedAnswer(i)}
                      checked={QuizFunc.variables.selectedAnswer === i}
                    />
                    <H3>{answer}</H3>
                  </AnswersBlock>
                ))}
              </AnswersCon>
            </QuestionWr>
          </FrameCard>

          <CustomButton disabled={QuizFunc.variables.selectedAnswer === null} style={{ marginTop: '12.82vw' }} onClick={() => QuizFunc.fun.setAnswered(true)} text={'отправить'} size={'medium'} color={'yellow'}/>
     
        </>
      )}
    </>
  );
};

const QuestionWr = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.62vw;
  padding: 0 7.18vw;
  h1{
    color: ${COLORS.yellow}
  }
`;
const AnswersCon = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.08vw;
`;
const AnswersBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  ${H3} {
    color: ${COLORS.white};
  }
`;

const StyledInput = styled.input`
  appearance: none;
  width: 4.62vw;
  height: 4.62vw;
  border: 0.51vw solid ${COLORS.white};
  background-color: ${COLORS.white};
  border-radius: 50%;
  position: relative;
  margin-right: 2.56vw;
  outline: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  flex-shrink: 0;
  &:checked {
    background-color: ${COLORS.white};
    border-color: ${COLORS.white};
  }

  &:checked::before {
    content: '';
    display: block;
    width: 2.56vw;
    height: 2.56vw;
    background-color: ${COLORS.red};
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    opacity: 1;
    transform: translate(-50%, -50%);
    transition: 0.2s;
  }
`;

export default Question;
