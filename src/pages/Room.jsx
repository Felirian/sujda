import React, { useState } from 'react';
import { styled } from 'styled-components';
import AudioGuide from '../components/Room/AudioGuide';
import Controls from '../components/Room/Controls';
import ModelSelector from '../components/Room/ModelSelector';
import FrameCard from '../components/Shared/FrameCard';
import { ButtonTextStyle, H1 } from '../styles/textTags';
import SvgSelector from '../components/Shared/SvgSelector';
import { COLORS } from '../styles/variables';
import Header from '../components/Shared/Header';

const Room = ({ data }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [allowPlay, setAllowPlay] = useState(false);

  const handleModalChoice = (choice) => {
    setModalIsOpen(false);
    setAllowPlay(choice === 'yes');
  };

  return (
    <RoomWr>
      <Header type='black' />

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
      <RoomImgBlock img={data.bgImg} />
      <ModelSelector exhibits={data.exhibits} />

      <RoomMainBlock>
        <AudioGuide audioSrc={data.audio} setModalIsOpen={setModalIsOpen} allowPlay={allowPlay} />
        <Controls background />
      </RoomMainBlock>
    </RoomWr>
  );
};

const RoomWr = styled.div`
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 100svh;
`;

const RoomBackdrop = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${COLORS.black};
  opacity: 0.9;
  position: absolute;
  z-index: 98;
`;

const RoomImgBlock = styled.div`
  background-image: ${({ img }) => `url(${img})`};
  background-size: cover;
  background-position: center;
  height: 90%;
`;

const RoomMainBlock = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
`;

// const RoomHeaderWr = styled.div`
//   position: absolute;
//   z-index: 97;
// `;

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

export default Room;
