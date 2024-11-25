import React, { useState } from "react";

import mapImage from "../../../assets/map/map.jpg";
import SvgSelector from "../../Shared/SvgSelector";
import { COLORS } from "../../../styles/variables";
import { MAP_POINTS, MAP_POINTS_LARGE } from "../../../features/data";
import { styled } from "styled-components";
import { KeepScale, useTransformEffect } from "react-zoom-pan-pinch";

const ZoomableMap = ({ handleDotClick, zoomToElement }) => {
  const [currentScale, setCurrentScale] = useState(0);

  useTransformEffect(({ state }) => {
    setCurrentScale(state.scale);
  });

  const clickToZoom = () => {
    zoomToElement("group1", 5);
  };

  return (
    <ZoomableMapWr>
      <img
        src={mapImage}
        alt="Карта"
        style={{ width: "100%", height: "auto" }}
      />
      {currentScale < 3 && (
        <Dot
          style={{ top: `38%`, left: `31%` }}
          id="group1"
        >
          <KeepScale onClick={clickToZoom}>
            <CirclePoint>
              <div />
            </CirclePoint>
          </KeepScale>
        </Dot>
      )}
      {currentScale >= 3
        ? MAP_POINTS_LARGE.map((point, index) => (
            <Dot
              key={index}
              style={{ top: `${point.top}%`, left: `${point.left}%` }}
            >
              <KeepScale onClick={() => handleDotClick(point)}>
                <SvgSelector svg="mapPoint" />
              </KeepScale>
            </Dot>
          ))
        : MAP_POINTS.map((point, index) => (
            <Dot
              key={index}
              style={{ top: `${point.top}%`, left: `${point.left}%` }}
            >
              <KeepScale onClick={() => handleDotClick(point)}>
                <SvgSelector svg="mapPoint" />
              </KeepScale>
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
