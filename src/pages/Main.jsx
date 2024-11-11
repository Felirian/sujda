import React from 'react';
import styled from 'styled-components';
import { H1, P1 } from '../styles/textTags';
import { Link } from 'react-router-dom';
import Button from '../components/Shared/Button';
import { COLORS } from '../styles/variables';

const Main = () => {
  return (
    <MainWr>
      <Logo src="/img/main-logo.png" alt="Logo" />
      <MainCon>
        <ConText>
          <H1Styled>
            Добро <br />
            пожаловать!
          </H1Styled>
          <P1>Музей-усадьба</P1>
        </ConText>
        <Link to="/map">
          <Button type={'sand'}>Начать</Button>
        </Link>
      </MainCon>
    </MainWr>
  );
};

export default Main;

const MainWr = styled.div`
  padding: 12.82vw 4.1vw 8.21vw 4.1vw;
  color: white;
  text-align: center;
  background-image: url('/img/main-bg.png');
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.img`
  max-width: 100%;
  height: auto;
`;

const MainCon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ConText = styled.div`
  margin-bottom: 20.5128vw;
`;

const H1Styled = styled(H1)`
  color: ${COLORS.lightSand};
  margin-bottom: 2vw;
`;
