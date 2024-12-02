import React, { useState } from 'react';
import { styled } from 'styled-components';
import AudioGuide from '../components/Room/AudioGuide';
import Controls from '../components/Room/Controls';
import ModelSelector from '../components/Room/ModelSelector';
import Header from '../components/Shared/Header';
import HeadphonesModal from '../components/Shared/HeadphonesModal';
import {useLocation} from "react-router-dom";

const Room = ({ data }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [allowPlay, setAllowPlay] = useState(false);
  const location = useLocation();
  const currentRoom = location.pathname.split('/')[2];

  const handleModalChoice = (choice) => {
    setModalIsOpen(false);
    setAllowPlay(choice === 'yes');
  };

  return (
    <RoomWr>
      <Header map home/>
      <HeadphonesModal modalIsOpen={modalIsOpen} handleModalChoice={handleModalChoice} />
      <RoomImgBlock img={data.bgImg} />
      <ModelSelector exhibits={data.exhibits} />

      <RoomMainBlock>
        <AudioGuide
          audioSrc={data.audio}
          setModalIsOpen={setModalIsOpen}
          allowPlay={allowPlay}
          hasQuiz={localStorage.getItem(currentRoom) === null}
        />
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

const RoomImgBlock = styled.div`
  background-image: ${({ img }) => `url(${img})`};
  background-size: cover;
  background-position: center;
  height: 100svh;
`;

const RoomMainBlock = styled.div`
  position: absolute;
  bottom: 0svh;
  width: 100%;
`;

// const RoomHeaderWr = styled.div`
//   position: absolute;
//   z-index: 97;
// `;

export default Room;
