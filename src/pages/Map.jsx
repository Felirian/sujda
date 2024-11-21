import React, { useState } from 'react';
import { styled } from 'styled-components';
import { COLORS } from '../styles/variables';
import CustomButton from '../components/Shared/CustomButton';
import { Link } from 'react-router-dom';
import { H1Style, P1Style } from '../styles/textTags';
import MapSection from '../components/Map/MapSection';
import mapGuide from '../assets/rooms/first/guide.mp3';

import HeadphonesModal from '../components/Shared/HeadphonesModal';
import AudioGuide from '../components/Room/AudioGuide';
import PopUpScroller from '../components/Shared/PopUpScroller';
import LongFrameCard from '../components/Shared/LongFrameCard';

const Map = () => {
  const [selectedPoint, setSelectedPoint] = useState(null);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [allowPlay, setAllowPlay] = useState(false);

  const [popUp, setPopUp] = useState(false);

  const handleDotClick = (point) => {
    setSelectedPoint(point);
    setPopUp(true);
  };

  const handleClosePopUp = () => {
    setPopUp(false);
  };

  const handleModalChoice = (choice) => {
    setModalIsOpen(false);
    setAllowPlay(choice === 'yes');
  };

  return (
    <MapWr>
      <HeadphonesModal modalIsOpen={modalIsOpen} handleModalChoice={handleModalChoice} />

      <MapSection handleDotClick={handleDotClick} />
      <MapControls>
        <AudioGuide
          audioSrc={mapGuide}
          setModalIsOpen={setModalIsOpen}
          allowPlay={allowPlay}
          hasQuiz={false}
        />
        <MapLink to='/museum'>
          <CustomButton type={'orange'}>в музей</CustomButton>
        </MapLink>
      </MapControls>

      {selectedPoint && (
        <PopUpScroller popUp={popUp} onClose={handleClosePopUp}>
          <LongFrameCard>
            <Title>{selectedPoint.name}</Title>
            <Info>{selectedPoint.info}</Info>
          </LongFrameCard>
        </PopUpScroller>
      )}
    </MapWr>
  );
};

const MapWr = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  height: 100vh;
  height: 100svh;
  background-color: ${COLORS.black};
  .map_wrapper {
    width: 100%;
    height: 90%;
  }
  .map_wrapper_content {
    height: 100%;
  }
`;

const Title = styled.h1`
  ${H1Style};
`;

const Info = styled.p`
  ${P1Style};
`;

const MapControls = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 44vw;
  background-color: ${COLORS.green};
  border-radius: 6.15vw 6.15vw 0 0;
`;

const MapLink = styled(Link)`
  position: absolute;
  bottom: 8.21vw;
  left: 50%;
  transform: translateX(-50%);
  width: 51.28vw;
  z-index: 2;

  div {
    margin: 3px;
    h2 {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

export default Map;
