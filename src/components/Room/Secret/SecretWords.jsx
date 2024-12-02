import React from 'react';
import styled, { css } from 'styled-components';
import { COLORS } from '../../../styles/variables';
import { ButtonTextStyle, H1, H3, H3Style } from '../../../styles/textTags';
import SvgSelector from '../../Shared/SvgSelector';
import FrameCard from '../../Shared/FrameCard';
import CustomButton from '../../Shared/CustomButton';

const SecretWords = ({ open, setIsOpenModal }) => {
  const secretWords = {
    first: localStorage.getItem('first') === 'true',
    second: localStorage.getItem('second') === 'true',
    third: localStorage.getItem('third') === 'true',
  };

  return (
    <>
      {open && <RoomBackdrop />}
      <RoomModal $modalisopen={open}>
        <FrameCard>
          <RoomModalContent>
            <ModalTitle>Секретные слова</ModalTitle>

            <SecretWord>
              <img src='img/secret/1.png' alt='' />
              {secretWords.first && <H3Styled>Ганнибал</H3Styled>}
            </SecretWord>

            <SecretWord>
              <img src='img/secret/2.png' alt='' />
              {secretWords.second && <H3Styled>Суйда</H3Styled>}
            </SecretWord>

            <SecretWord>
              <img src='img/secret/3.png' alt='' />
              {secretWords.third && <H3Styled>Пушкин</H3Styled>}
            </SecretWord>

            <CustomButton size='medium' onClick={() => setIsOpenModal(false)} text='закрыть' />
          </RoomModalContent>
        </FrameCard>
      </RoomModal>
    </>
  );
};

const RoomBackdrop = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${COLORS.black};
  opacity: 0.9;
  position: absolute;
  z-index: 1000;
`;

const RoomModal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: ${({ $modalisopen }) => `translate(-50%, -50%) scale(${$modalisopen ? '1' : '0'})`};
  opacity: ${({ $modalisopen }) => `${$modalisopen ? '1' : '0'}`};
  transition: transform 0.2s, opacity 0.2s;
  z-index: 1001;
`;

const RoomModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    color: ${COLORS.yellow};
  }
  svg {
    path {
      fill: ${COLORS.white};
    }
  }
  a {
    margin-top: 10vw;
  }
`;

const ModalTitle = styled.div`
  ${ButtonTextStyle};
  font-size: 6.92vw;
  color: ${COLORS.lightSand};
  margin-bottom: 3.08vw;
`;

const SecretWord = styled.div`
  width: 36.92vw;
  height: 16.92vw;
  position: relative;
  img {
    position: absolute;
    width: 100%;
    height: 100%;
  }
`;

const H3Styled = styled.div`
  position: absolute;
  text-align: center;
  font-family: 'Singel';
  font-size: 4.87vw;
  font-style: normal;
  font-weight: 600;
  line-height: 102%;
  color: ${COLORS.darkGreen};

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default SecretWords;
