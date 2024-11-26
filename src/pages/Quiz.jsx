import React from 'react';
import styled from 'styled-components';
import Question from '../components/Room/Quiz/Question';
import { useQuizFunctions } from '../features/quiz';
import { COLORS } from '../styles/variables';
import { H1, H3, P1} from '../styles/textTags';
import FrameCard from '../components/Shared/FrameCard';
import bg from '../assets/quiz/quiz-bg.jpg';
import feather from '../assets/quiz/feather.png';
import QuestionCounter from '../components/Room/Quiz/QuestionCounter';
import Header from '../components/Shared/Header';

const Quiz = ({ data, quizTexts }) => {
  const QuizFunc = useQuizFunctions();

  return (
    <QuizWr>
      <Header back={true} type={'black'}/>

      {QuizFunc.variables.currentQuestion >= 0 && QuizFunc.variables.currentQuestion < data.length && (
        <QuestionCounter
          currentQuestion={QuizFunc.variables.currentQuestion}
          totalQuestions={data.length}
        />
      )}

      {QuizFunc.variables.currentQuestion === -1 ? (
        <>
          <FrameCard>
            <StartPageWr>
              <H1>Викторина</H1>
              <P1Styled>
                {quizTexts.startPage}
              </P1Styled>
            </StartPageWr>
          </FrameCard>
          <QuizBtn
            style={{ marginTop: '12.82vw' }}
            onClick={() => QuizFunc.fun.nextQuestion(false)}
          >
            НАЧАТЬ
          </QuizBtn>
        </>
      ) : QuizFunc.variables.currentQuestion === data.length ? (
        <>
          <FrameCard>
            <EndPageWr>
              <FeatherImg src={feather} alt={'feather'} />
              <H1>Результаты</H1>

              <P1>{QuizFunc.variables.score}</P1>
            </EndPageWr>
          </FrameCard>

          <QuizBtn style={{ marginTop: '12.82vw' }} onClick={() => QuizFunc.fun.startOver()}>
            ЗАВЕРШИТЬ
          </QuizBtn>
        </>
      ) : (
        <>
          <Question question={data[QuizFunc.variables.currentQuestion]} QuizFunc={QuizFunc} />
        </>
      )}
    </QuizWr>
  );
};

export default Quiz;

const StartPageWr = styled.div`
  display: flex;
  flex-direction: column;
  alaign-items: center;
  width: 100%;
  gap: 4.62vw;
  padding: 0 7.18vw;
`;

const EndPageWr = styled.div`
  display: flex;
  flex-direction: column;
  alaign-items: center;
  width: 100%;
  gap: 4.62vw;
  padding: 10vw 7.18vw 0 7.18vw;
  position: relative;
`;

const QuizWr = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100svh;
  background-image: url('${bg}');
  background-size: cover;
  background-position: center;
`;

export const QuizBtn = ({ children, onClick, ...props }) => {
  return (
    <QuizBtnWr {...props} onClick={onClick}>
      <QuizCon>
        <H3>{children}</H3>
      </QuizCon>
    </QuizBtnWr>
  );
};

const QuizBtnWr = styled.button`
  background-color: ${COLORS.lightSand};
  width: 51.28vw;
  height: 10.26vw;
  padding: 0.77vw;
  &:active {
    background-color: #d7bf99;
  }
  &:disabled {
    opacity: 0.5;
  }
`;

const QuizCon = styled.div`
  width: 100%;
  height: 100%;
  border: 0.26vw solid ${COLORS.brown};
  display: flex;
  align-items: center;
  justify-content: center;
  ${H3} {
    color: ${COLORS.brown};
    font-weight: 600;
  }
`;

const P1Styled = styled(P1)`
  text-align: left;
`;

const FeatherImg = styled.img`
  width: 20.5vw;
  height: 20.5vw;
  object-fit: cover;
  object-position: bottom;
  pointer-events: none;
  position: absolute;
  z-index: 1;
  top: -10vw;
  left: 50%;
  transform: translateX(-50%);
`;
