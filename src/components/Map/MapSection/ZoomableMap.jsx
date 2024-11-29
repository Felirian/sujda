import React, { useEffect, useMemo, useState } from 'react';
import SvgSelector from '../../Shared/SvgSelector';
import { COLORS } from '../../../styles/variables';
import { styled } from 'styled-components';
import { useTransformEffect } from 'react-zoom-pan-pinch';
import svg from '../../../assets/map/Vector2.svg';
import { Clustering, POINTS_DATA } from '../../../features/map';

const ZoomableMap = ({ handleDotClick, zoomToElement, selected }) => {
  const [zoomValue, setZoomValue] = useState(0);
  const [currentScale, setCurrentScale] = useState(5);
  const [points, setPoints] = useState(Clustering(currentScale, POINTS_DATA));

  useTransformEffect(({ state }) => {
    setZoomValue(state.scale);
    const newScale = Math.floor(5 / state.scale) || 0.1;
    if (newScale !== currentScale) {
      setCurrentScale(newScale);
    }
  });

  const filteredPoints = useMemo(() => {
    return POINTS_DATA.filter((point) =>
      selected.length === 0 ? true : selected.includes(point.filter)
    );
  }, [selected]);

  const clusteredPoints = useMemo(() => {
    return Clustering(currentScale, filteredPoints);
  }, [currentScale, filteredPoints]);

  useEffect(() => {
    setPoints(clusteredPoints);
  }, [clusteredPoints]);

  const clickToZoom = (to) => {
    zoomToElement(to, 6);
  };

  const calculateScale = (baseScale, zoomLevel) => {
    return baseScale / zoomLevel;
  };

  return (
    <ZoomableMapWr>
      <img src={svg} style={{ width: 'auto', height: 'auto' }} alt='суйда' />
      {points.map((point, index) =>
        point.count ? (
          <Dot
            key={`${point.coordinates.join('-')}-group`}
            style={{ top: `${point.coordinates[0]}%`, left: `${point.coordinates[1]}%` }}
            id={`${index}-group`}
            onClick={() => clickToZoom(`${index}-group`)}
            $scale={calculateScale(1, zoomValue)}
          >
            <CirclePoint>
              <div>{point.count}</div>
            </CirclePoint>
          </Dot>
        ) : (
          <Dot
            key={`${point.coordinates.join('-')}-point`}
            style={{ top: `${point.coordinates[0]}%`, left: `${point.coordinates[1]}%` }}
            id={`${index}-point`}
            $scale={calculateScale(1, zoomValue)}
            onClick={() => handleDotClick(point)}
          >
            <SvgSelector svg='mapPoint' />
          </Dot>
        )
      )}
    </ZoomableMapWr>
  );
};

const ZoomableMapWr = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const Dot = styled.div`
  width: 7.44vw;
  height: 10.77vw;
  position: absolute;
  cursor: pointer;
  transform-origin: center;
  transform: ${({ $scale }) => `scale(${$scale})`};
  svg {
    width: 100%;
    height: 100%;
    transform: translateY(-40%);
  }
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
    display: flex;
    align-items: center;
    justify-content: center;
    color: black;
  }
`;

export default ZoomableMap;
