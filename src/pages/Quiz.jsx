import React from 'react';
import styled from "styled-components";

const Quiz = ({data}) => {
  return (
    <QuizWr>
      <AnswersCon>
        <AnswerBlock>
          <h1>Ответ 1</h1>
        </AnswerBlock>

        <AnswerBlock>
          <h1>Ответ 1</h1>
        </AnswerBlock>

        <AnswerBlock>
          <h1>Ответ 1</h1>
        </AnswerBlock>
      </AnswersCon>
      <QuestionsCon>

      </QuestionsCon>
    </QuizWr>
  );
};

const QuizWr = styled.div`
  
`;

const QuestionsCon = styled.div`
  
`;

const AnswersCon = styled.div`
  
`;

const AnswerBlock = styled.div`
  
`;

export default Quiz;