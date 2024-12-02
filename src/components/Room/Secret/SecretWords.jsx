import React from 'react';
import styled, { css } from 'styled-components';
import { COLORS } from '../../../styles/variables';
import {H1, H3, H3Style} from '../../../styles/textTags';
import SvgSelector from '../../Shared/SvgSelector';
import FrameCard from "../../Shared/FrameCard";
import CustomButton from "../../Shared/CustomButton";

const SecretWords = ({ open, handleModalChoice }) => {
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

              {secretWords.first && (
                <SecretWord1>
                  <H3Styled>Пушкин</H3Styled>

                </SecretWord1>
              )}
              {secretWords.second && (
                <SecretWord2>
                  <H3Styled>Ганнибал</H3Styled>

                </SecretWord2>
              )}
              {secretWords.third && (
                <SecretWord3>
                  <H3Styled>Суйда</H3Styled>

                </SecretWord3>
              )}

            <CustomButton size='medium' onClick={() => handleModalChoice('yes')} text='хорошо' />
            <ModalBtn onClick={() => handleModalChoice('no')}>нет, спасибо</ModalBtn>
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
  transition: transform 0.2s;
  z-index: 1001;
`;

const RoomModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5.9vw;
  h1 {
    color: ${COLORS.yellow};
  }
  svg {
    path {
      fill: ${COLORS.white};
    }
  }
`;

const ModalBtn = styled.button`
  ${H3Style};
  color: ${COLORS.sand};
`;

const SecretWordsBlock = styled.div`
  position: absolute;
  left: 0.1vw;
  top: 8.21vw;
  z-index: 20;

  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 2.05vw;
`;

const SecretWordStyle = css`
  position: relative;

  display: flex;
  align-items: center;

  color: ${COLORS.white};
  height: 9.49vw;
  padding-left: 5vw;
  
`;

const SecretWord1 = styled.div`
  ${SecretWordStyle};
  width: 37.18vw;
`;
const SecretWord2 = styled.div`
  ${SecretWordStyle};
  width: 41.54vw;
`;
const SecretWord3 = styled.div`
  ${SecretWordStyle};
  width: 44.62vw;
`;

const H3Styled = styled(H3)`
  color: ${COLORS.white};
  text-transform: uppercase;
  font-weight: 600;
  white-space: nowrap;
  font-size: 4.1vw;
  z-index: 5;

  text-align: start;
`;

export default SecretWords;
