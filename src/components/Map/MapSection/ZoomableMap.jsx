import React, { useState } from 'react';

import mapImage from '../../../assets/map/map.jpg';
import SvgSelector from '../../Shared/SvgSelector';
import { MAP_POINTS, MAP_POINTS_LARGE } from '../../../features/data';
import { styled } from 'styled-components';
import { KeepScale, useTransformContext, useTransformEffect } from 'react-zoom-pan-pinch';

const ZoomableMap = ({ handleDotClick }) => {
  const [currentScale, setCurrentScale] = useState(0);

  const context = useTransformContext();
  console.log(context, 'conteerere');

  useTransformEffect(({ state }) => {
    setCurrentScale(state.scale);
  });

  return (
    <ZoomableMapWr>
      <img src={mapImage} alt='Карта' style={{ width: '100%', height: 'auto' }} />
      {currentScale >= 3
        ? MAP_POINTS_LARGE.map((point, index) => (
            <Dot key={index} style={{ top: `${point.top}%`, left: `${point.left}%` }}>
              <KeepScale onClick={() => handleDotClick(point)}>
                <SvgSelector svg='mapPoint' />
              </KeepScale>
            </Dot>
          ))
        : MAP_POINTS.map((point, index) => (
            <Dot key={index} style={{ top: `${point.top}%`, left: `${point.left}%` }}>
              <KeepScale onClick={() => handleDotClick(point)}>
                <SvgSelector svg='mapPoint' />
              </KeepScale>
            </Dot>
          ))}
      {currentScale < 3 && (
        <Dot style={{ top: `60%`, left: `30%` }}>
          <KeepScale>
            <SvgSelector svg='mapPoint' id='group1' />
          </KeepScale>
        </Dot>
      )}
    </ZoomableMapWr>
  );
};

const ZoomableMapWr = styled.div`
  width: 240vw;
  height: 230vw;
  position: relative;
`;

const Dot = styled.div`
  width: 7.44vw;
  height: 10.77vw;

  position: absolute;
  cursor: pointer;

  svg {
    width: 100%;
    height: 100%;
    transform: translateY(-40%);
  }
`;

export default ZoomableMap;
