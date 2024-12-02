import React from 'react';
import styled from 'styled-components';
import { H1 } from '../styles/textTags';
import { useNavigate } from 'react-router-dom';
import CustomButton from '../components/Shared/CustomButton';
import { COLORS } from '../styles/variables';

const Main = () => {
  const navigate = useNavigate();
  const requestFullscreen = () => {
    const elem = document.documentElement;
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    }
    navigate('/tutorial');
  };
  return (
    <MainWr>
      <Logo src='/svg/logo.svg' alt='Logo' />
      <MainCon>
        <H1Styled>
          Добро <br />
          пожаловать!
        </H1Styled>
        <MainBtn onClick={requestFullscreen}>
          <CustomButton text={'Начать'} size={'medium'}/>
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
  background-image: url('/img/main-bg.png');
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
  gap: 8vw;
`;

const H1Styled = styled(H1)`
  color: ${COLORS.lightSand};
  text-align: center;
  font-family: Forum;
  font-size: 12.31vw;
  font-style: normal;
  font-weight: 400;
  line-height: 106.415%; /* 51.079px */
`;

const MainBtn = styled.button`

`;
