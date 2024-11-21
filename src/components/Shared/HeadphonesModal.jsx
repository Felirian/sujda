import React from 'react';
import { ButtonTextStyle, H1 } from '../../styles/textTags';
import SvgSelector from './SvgSelector';
import { styled } from 'styled-components';
import { COLORS } from '../../styles/variables';
import FrameCard from './FrameCard';

const HeadphonesModal = ({ modalIsOpen, handleModalChoice }) => {
  return (
    <>
      {modalIsOpen && <RoomBackdrop />}
      <RoomModal $modalisopen={modalIsOpen}>
        <FrameCard>
          <RoomModalContent>
            <H1>Включите, пожалуйста, наушники!</H1>
            <SvgSelector svg='headphones' />
            <ModalBtn onClick={() => handleModalChoice('yes')}>
              <ModalBtnContent>хорошо</ModalBtnContent>
            </ModalBtn>
            <ModalBtn onClick={() => handleModalChoice('no')}>
              <ModalBtnContent>нет, спасибо</ModalBtnContent>
            </ModalBtn>
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
  z-index: 98;
`;

const RoomModal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: ${({ $modalisopen }) => `translate(-50%, -50%) scale(${$modalisopen ? '1' : '0'})`};
  transition: transform 0.2s;
  z-index: 99;
`;

const RoomModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5.9vw;
`;

const ModalBtn = styled.button`
  padding: 0.77vw;
  background-color: ${COLORS.sand};
  margin-bottom: 0.77vw;
`;

const ModalBtnContent = styled.div`
  ${ButtonTextStyle};
  padding: 1.92vw 5.9vw;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0.3vw solid ${COLORS.grey};
  background-color: ${COLORS.sand};
  height: 10.26vw;
`;

export default HeadphonesModal;
