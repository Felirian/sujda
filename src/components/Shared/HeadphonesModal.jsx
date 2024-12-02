import React from 'react';
import { ButtonTextStyle, H1, H3Style } from '../../styles/textTags';
import SvgSelector from './SvgSelector';
import { styled } from 'styled-components';
import { COLORS } from '../../styles/variables';
import FrameCard from './FrameCard';
import CustomButton from './CustomButton';

const HeadphonesModal = ({ modalIsOpen, handleModalChoice }) => {
  return (
    <>
      {modalIsOpen && <RoomBackdrop />}
      <RoomModal $modalisopen={modalIsOpen}>
        <FrameCard>
          <RoomModalContent>
            <H1>Включите, пожалуйста, наушники!</H1>
            <SvgSelector svg='headphones' />
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
  opacity: ${({ $modalisopen }) => `${$modalisopen ? '1' : '0'}`};
  transition: transform 0.2s, opacity 0.2s;
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

export default HeadphonesModal;
