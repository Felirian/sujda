import React, { useState } from 'react';

import mapImage from '../../../assets/map/map.jpg';
import SvgSelector from '../../Shared/SvgSelector';
import { COLORS } from '../../../styles/variables';
import { MAP_POINTS, MAP_POINTS_LARGE } from '../../../features/data';
import { styled } from 'styled-components';
import { KeepScale, useTransformEffect } from 'react-zoom-pan-pinch';

const ZoomableMap = ({ handleDotClick, zoomToElement }) => {
  const [currentScale, setCurrentScale] = useState(0);

  useTransformEffect(({ state }) => {
    setCurrentScale(state.scale);
  });

  const clickToZoom = () => {
    zoomToElement('group1', 6);
  };

  return (
    <ZoomableMapWr>
      <img src={mapImage} alt='Карта' style={{ width: '100%', height: 'auto' }} />
      {currentScale <= 3 && (
        <DotCircle style={{ top: `36%`, left: `30%` }} id='group1' onClick={clickToZoom}>
          <CirclePoint>
            <div />
          </CirclePoint>
        </DotCircle>
      )}
      {currentScale <= 3
        ? MAP_POINTS_LARGE.map((point, index) => (
            <DotLarge
              key={index}
              onClick={() => handleDotClick(point)}
              style={{ top: `${point.top}%`, left: `${point.left}%` }}
            >
              <SvgSelector svg='mapPoint' />
            </DotLarge>
          ))
        : MAP_POINTS.map((point, index) => (
            <Dot
              key={index}
              onClick={() => handleDotClick(point)}
              style={{ top: `${point.top}%`, left: `${point.left}%` }}
            >
              <SvgSelector svg='mapPoint' />
            </Dot>
          ))}
    </ZoomableMapWr>
  );
};

const ZoomableMapWr = styled.div`
  width: 240vw;
  height: 230vw;
  position: relative;
`;

const Dot = styled(KeepScale)`
  width: 7.44vw;
  height: 10.77vw;

  position: absolute;
  cursor: pointer;
  opacity: 0;
  svg {
    width: 100%;
    height: 100%;
    transform: translateY(-40%);
  }
  animation: appear 0.3s 0.1s ease both;
  @keyframes appear {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const DotCircle = styled(Dot)``;

const DotLarge = styled(Dot)``;

const CirclePoint = styled.div`
  width: 11vw;
  height: 11vw;
  border-radius: 50%;
  border: 0.6vw solid ${COLORS.white};
  background-color: ${COLORS.pointRed};
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    width: 7vw;
    height: 7vw;
    border-radius: 50%;
    background-color: ${COLORS.white};
  }
`;
export default ZoomableMap;
