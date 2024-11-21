import React, { useState } from 'react';
import { styled } from 'styled-components';
import { COLORS } from '../styles/variables';
import CustomButton from '../components/Shared/CustomButton';
import { Link } from 'react-router-dom';
import { H1Style, P1Style } from '../styles/textTags';
import MapSection from '../components/Map/MapSection';
import SvgSelector from '../components/Shared/SvgSelector';

const Map = () => {
  const [selectedPoint, setSelectedPoint] = useState(null);

  const handleDotClick = (point) => {
    setSelectedPoint(point);
  };

  return (
    <MapWr>
      <LogoWr>
        <SvgSelector svg='elephantLogo' />
      </LogoWr>
      {selectedPoint && <Overlay onClick={() => setSelectedPoint(null)} />}
      <MapSection handleDotClick={handleDotClick} />
      <Link to='/museum'>
        <CustomButton type={'orange'}>в музей</CustomButton>
      </Link>

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
  width: 100%;
  overflow: hidden;
  height: 100vh;
  height: 100svh;
  padding-top: 30.77vw;
  background-color: ${COLORS.brown};
  .map_wrapper {
    width: 100%;
  }
  .map_wrapper_content {
  }
`;

const Title = styled.h1`
  ${H1Style};
`;

const Info = styled.p`
  ${P1Style};
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

const LogoWr = styled.div`
  position: absolute;
  top: 3.85vw;
  left: 50%;
  transform: translateX(-50%);
  width: 57px;
  height: 58px;
  svg {
    width: 100%;
    height: 100%;
  }
`;

export default Map;
