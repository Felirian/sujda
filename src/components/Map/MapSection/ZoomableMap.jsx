import React, { useState } from 'react';

import SvgSelector from '../../Shared/SvgSelector';
import { COLORS } from '../../../styles/variables';
import { MAP_POINTS, MAP_POINTS_LARGE } from '../../../features/data';
import { styled } from 'styled-components';
import { KeepScale, useTransformEffect } from 'react-zoom-pan-pinch';
import svg from '../../../assets/map/Vector.svg';

const ZoomableMap = ({ handleDotClick, zoomToElement }) => {
  const [currentScale, setCurrentScale] = useState(0);

  // const { zoomIn } = useControls();

  useTransformEffect(({ state }) => {
    setCurrentScale(state.scale);
  });

  const clickToZoom = () => {
    zoomToElement('group1', 6);
  };

  // useTransformInit(({ _, instance }) => {
  //   if (instance.mounted) {
  //     setTimeout(() => {
  //       zoomIn(0.5);
  //     }, 150);
  //   }
  // });

  return (
    <ZoomableMapWr>
      <img src={svg} style={{ width: 'auto', height: 'auto' }} alt={'суйда'} />

      <Dot
        style={{ top: `46%`, left: `31%` }}
        id='group1'
        onClick={clickToZoom}
        $isvisible={currentScale <= 3}
      >
        <CirclePoint>
          <div />
        </CirclePoint>
      </Dot>

      {MAP_POINTS_LARGE.map((point, index) => (
        <Dot
          key={index}
          onClick={() => handleDotClick(point)}
          style={{ top: `${point.top}%`, left: `${point.left}%` }}
          $isvisible={currentScale <= 3}
        >
          <SvgSelector svg='mapPoint' />
        </Dot>
      ))}
      {MAP_POINTS.map((point, index) => (
        <Dot
          key={index}
          onClick={() => handleDotClick(point)}
          style={{ top: `${point.top}%`, left: `${point.left}%` }}
          $isvisible={currentScale > 3}
        >
          <SvgSelector svg='mapPoint' />
        </Dot>
      ))}
    </ZoomableMapWr>
  );
};

const ZoomableMapWr = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const Dot = styled(KeepScale)`
  width: 7.44vw;
  height: 10.77vw;

  position: absolute;
  cursor: pointer;

  svg {
    width: 100%;
    height: 100%;
    transform: translateY(-40%);
  }

  transition: opacity 0.2s;
  opacity: ${({ $isvisible }) => ($isvisible ? '1' : '0')};
  pointer-events: ${({ $isvisible }) => ($isvisible ? 'auto' : 'none')};
`;

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
