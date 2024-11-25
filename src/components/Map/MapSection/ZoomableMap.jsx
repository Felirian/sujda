import React, { useState } from "react";

import mapImage from "../../../assets/map/map.jpg";
import SvgSelector from "../../Shared/SvgSelector";
import { MAP_POINTS, MAP_POINTS_LARGE } from "../../../features/data";
import { styled } from "styled-components";
import { KeepScale, useTransformEffect } from "react-zoom-pan-pinch";

const ZoomableMap = ({ handleDotClick }) => {
  const [currentScale, setCurrentScale] = useState(0);

  useTransformEffect(({ state }) => {
    setCurrentScale(state.scale);
  });

  console.log(currentScale);

  return (
    <ZoomableMapWr>
      <img
        src={mapImage}
        alt="Карта"
        style={{ width: "100%", height: "auto" }}
      />
      {currentScale >= 3
        ? MAP_POINTS_LARGE.map((point, index) => (
            <Dot
              key={index}
              style={{ top: `${point.top}px`, left: `${point.left}px` }}
            >
              <KeepScale onClick={() => handleDotClick(point)}>
                <SvgSelector svg="mapPoint" />
              </KeepScale>
            </Dot>
          ))
        : MAP_POINTS.map((point, index) => (
            <Dot
              key={index}
              style={{ top: `${point.top}px`, left: `${point.left}px` }}
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
