import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { COLORS } from '../styles/variables';
import { Link } from 'react-router-dom';
import mapGuide from '../assets/map/guide.mp3';
import CustomButton from '../components/Shared/CustomButton';
import HeadphonesModal from '../components/Shared/HeadphonesModal';
import AudioGuide from '../components/Room/AudioGuide';
import PopUpScroller from '../components/Shared/PopUpScroller';
import ModalContent from '../components/Map/ModalContent';
import MapSection from '../components/Map/MapSection';
import Filter from '../components/Map/Filter';
import Controls from '../components/Room/Controls';

const Map = () => {
  const [selectedPoint, setSelectedPoint] = useState(null);
  const [selected, setSelected] = useState([]);
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

      <FilterWr>
        <Filter setSelected={setSelected} selected={selected} />
      </FilterWr>

      <MapSection handleDotClick={handleDotClick} selected={selected} />

      <MapControls>
        <AudioGuide
          audioSrc={mapGuide}
          setModalIsOpen={setHeadphonesModalIsOpen}
          allowPlay={allowPlay}
          hasQuiz={false}
        />

        <Controls />
      </MapControls>

      <PopUpScroller popUp={popUp} onClose={handleClosePopUp}>
        <ModalContent key={selectedPoint?.name} selectedPoint={selectedPoint} />
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
  background-color: ${COLORS.black};
  .map_wrapper {
    width: 100%;
    height: 85%;
  }
  .map_wrapper_content {
  }
`;

const MapControls = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 6.154vw;
  bottom: 0;
  width: 100%;
  background-color: ${COLORS.green};
  border-radius: 6.15vw 6.15vw 0 0;
`;

const FilterWr = styled.div`
  position: absolute;
  top: 1%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 9;
`;

export default Map;
