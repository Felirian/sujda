import React from 'react';
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch';
import { MAP_POINTS } from '../../features/data';
import { styled } from 'styled-components';
import { COLORS } from '../../styles/variables';
import mapImage from '../../assets/map/map.jpg';

const MapSection = ({ handleDotClick }) => {
  return (
    <TransformWrapper centerOnInit initialScale={1} doubleClick={{ disabled: true }} maxScale={5}>
      <TransformComponent wrapperClass='map_wrapper' contentClass='map_wrapper_content'>
        <ZoomableMap>
          <img src={mapImage} alt='Карта' style={{ width: '100%', height: 'auto' }} />

          {MAP_POINTS.map((point, index) => (
            <Dot
              key={point.id}
              onClick={() => handleDotClick(point)}
              style={{ top: `${point.top}px`, left: `${point.left}px` }}
            />
          ))}
        </ZoomableMap>
      </TransformComponent>
    </TransformWrapper>
  );
};

const ZoomableMap = styled.div`
  background-color: ${COLORS.brown};
  width: 900px;
  height: 700px;
  font-size: 70px;
`;

const Dot = styled.div`
  width: 20px;
  height: 20px;
  background-color: ${COLORS.yellow};
  border: 2px solid ${COLORS.white};
  border-radius: 50%;
  position: absolute;
  cursor: pointer;
`;

export default MapSection;
