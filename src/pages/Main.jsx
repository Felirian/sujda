import React from 'react';
import styled from 'styled-components';
import { H1, P1 } from '../styles/textTags';
import { Link, useNavigate } from 'react-router-dom';
import CustomButton from '../components/Shared/CustomButton';
import { COLORS } from '../styles/variables';

const Main = () => {
  const navigate = useNavigate();
  const requestFullscreen = () => {
    const elem = document.documentElement;
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    }
    navigate('/map');
  };
  return (
    <MainWr>
      <Logo src='/img/main-logo.png' alt='Logo' />
      <MainCon>
        <ConText>
          <H1Styled>
            Добро <br />
            пожаловать!
          </H1Styled>
          <P1>В виртуальную музей-усадьбу</P1>
        </ConText>
        <MainBtn onClick={requestFullscreen}>
          <CustomButton type={'sand'}>Начать</CustomButton>
        </MainBtn>
      </MainCon>
    </MainWr>
  );
};

export default Main;

const MainWr = styled.div`
  padding: 12.82vw 4.1vw 8.21vw 4.1vw;
  color: white;
  text-align: center;
  background-image: url('/img/main-bg.jpg');
  background-size: cover;
  background-position: center;
  height: 100svh;
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

const MainBtn = styled.button`
  width: 100%;
  padding: 0.77vw;
  background-color: ${COLORS.sand};
`;
