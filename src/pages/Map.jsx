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
import logo from '../assets/header/logo.png';

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
      <PopUpScroller popUp={popUp} onClose={handleClosePopUp}>
        <ModalContent key={selectedPoint?.name} selectedPoint={selectedPoint} />
      </PopUpScroller>
      <FilterWr>
        <Filter setSelected={setSelected} selected={selected} />
        <HeaderBtn to={'/museum'}>
          <img src={logo} alt='Logo' />
        </HeaderBtn>
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
  /* gap: 6.154vw; */
  bottom: 0;
  width: 100%;
  background-color: ${COLORS.green};
  border-radius: 6.15vw 6.15vw 0 0;
`;

const FilterWr = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4.1vw;
  width: 100%;
  padding: 0 5.13vw;
  position: absolute;
  top: 14.87vw;

  z-index: 9;
`;

const HeaderBtn = styled(Link)`
  width: 8vw;
  height: 9.2vw;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  width: 12.821vw;
  height: 12.821vw;
  background-color: #6c2929;
  border-radius: 1.795vw;
  img {
    max-width: 100%;
    max-height: 100%;
  }
`;

export default Map;
