import React, { useEffect, useMemo, useState } from 'react';
import SvgSelector from '../../Shared/SvgSelector';
import { COLORS, MARK_COLORS } from '../../../styles/variables';
import { styled } from 'styled-components';
import { useTransformEffect } from 'react-zoom-pan-pinch';
import svg from '../../../assets/map/Vector2.svg';
import { Clustering, POINTS_DATA } from '../../../features/map';
import { H2Style } from '../../../styles/textTags';

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
            <ClusterPoint>
              <SvgSelector svg='clusterMapPoint' />
              <Circle>{point.count}</Circle>
            </ClusterPoint>
          </Dot>
        ) : (
          <Dot
            key={`${point.coordinates.join('-')}-point`}
            style={{ top: `${point.coordinates[0]}%`, left: `${point.coordinates[1]}%` }}
            id={`${index}-point`}
            $scale={calculateScale(1, zoomValue)}
            onClick={() => handleDotClick(point)}
            $pointIndex={index}
          >
            <DotContent>
              <SvgSelector svg={`mapPoint-${point.filter}`} />
              <img src={`/img/points/${point.filter}.png`} alt='point' />
            </DotContent>
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
  width: 29px;
  height: 42px;
  position: absolute;
  cursor: pointer;
  transform-origin: center;
  transform: ${({ $scale }) => `scale(${$scale})`};
  svg {
    width: 100%;
    height: 100%;
    transform: translateY(-40%);
  }
  img {
    position: absolute;
    width: 25px;
    height: 25px;
    left: 2px;
    top: -14px;
  }
`;

const DotContent = styled.div`
  width: 100%;
  height: 100%;
`;

const ClusterPoint = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  svg {
    width: 40px;
    height: 50px;
    position: absolute;
    top: 0;
    left: -6px;
  }
`;

const Circle = styled.div`
  ${H2Style};
  font-size: 20px;
  position: absolute;
  top: -14px;

  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-color: ${COLORS.white};
  display: flex;
  align-items: center;
  justify-content: center;

  color: ${COLORS.green};
`;

export default ZoomableMap;
