import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { COLORS } from '../styles/variables';
import CustomButton from '../components/Shared/CustomButton';
import { Link } from 'react-router-dom';
import { H1Style, P1Style } from '../styles/textTags';

import mapGuide from '../assets/rooms/first/guide.mp3';

import HeadphonesModal from '../components/Shared/HeadphonesModal';
import AudioGuide from '../components/Room/AudioGuide';
import PopUpScroller from '../components/Shared/PopUpScroller';
import ModalContent from '../components/Map/ModalContent';
import MapSection from '../components/Map/MapSection';

const Map = () => {
  const [selectedPoint, setSelectedPoint] = useState(null);

  const [headphonesModalIsOpen, setHeadphonesModalIsOpen] = useState(false);
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
    setHeadphonesModalIsOpen(false);
    setAllowPlay(choice === 'yes');
  };

  useEffect(() => {
    const handleContextmenu = (e) => {
      e.preventDefault();
    };
    document.addEventListener('contextmenu', handleContextmenu);
  }, []);

  return (
    <MapWr>
      <HeadphonesModal modalIsOpen={headphonesModalIsOpen} handleModalChoice={handleModalChoice} />

      <MapSection handleDotClick={handleDotClick} />

      <MapControls>
        <AudioGuide
          audioSrc={mapGuide}
          setModalIsOpen={setHeadphonesModalIsOpen}
          allowPlay={allowPlay}
          hasQuiz={false}
        />
        <MapLink to='/museum'>
          <CustomButton type={'orange'}>в музей</CustomButton>
        </MapLink>
      </MapControls>

      <PopUpScroller popUp={popUp} onClose={handleClosePopUp}>
        <ModalContent selectedPoint={selectedPoint} />
      </PopUpScroller>
    </MapWr>
  );
};

const MapWr = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  height: 100vh;
  height: 100svh;
  /* touch-action: none; */
  background-color: ${COLORS.black};
  .map_wrapper {
    width: 100%;
    height: 90%;
  }
  .map_wrapper_content {
    height: 100%;
  }
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
