import React from "react";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";

import ZoomableMap from "./ZoomableMap";

const MapSection = ({ handleDotClick }) => {
  return (
    <TransformWrapper
      centerOnInit
      initialScale={1}
      doubleClick={{ disabled: true }}
      maxScale={9}
      minScale={1}
    >
      <TransformComponent
        wrapperClass="map_wrapper"
        contentClass="map_wrapper_content"
      >
        <ZoomableMap handleDotClick={handleDotClick} />
      </TransformComponent>
    </TransformWrapper>
  );
};

export default MapSection;
