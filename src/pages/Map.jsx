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

const Map = () => {
  const [selectedPoint, setSelectedPoint] = useState(null);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [allowPlay, setAllowPlay] = useState(false);

  const handleDotClick = (point) => {
    setSelectedPoint(point);
  };

  const handleModalChoice = (choice) => {
    setModalIsOpen(false);
    setAllowPlay(choice === 'yes');
  };

  return (
    <MapWr>
      <HeadphonesModal modalIsOpen={modalIsOpen} handleModalChoice={handleModalChoice} />

      {selectedPoint && <Overlay onClick={() => setSelectedPoint(null)} />}

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
        <InfoSection>
          <Title>{selectedPoint.name}</Title>
          <Info>{selectedPoint.info}</Info>
          <CloseButton onClick={() => setSelectedPoint(null)}>×</CloseButton>
        </InfoSection>
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

  div {
    margin: 3px;
    h2 {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

const InfoSection = styled.div`
  background-color: ${COLORS.green};
  padding: 20%;
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 20;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 30px;
  height: 30px;
  background-color: ${COLORS.red};
  color: ${COLORS.white};
  border: none;
  border-radius: 50%;
  font-size: 20px;
  font-weight: bold;
  line-height: 30px;
  text-align: center;
  cursor: pointer;
  z-index: 20;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 10;
`;

export default Map;
