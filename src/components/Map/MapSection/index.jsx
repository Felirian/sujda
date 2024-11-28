import React from 'react';
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch';

import ZoomableMap from './ZoomableMap';

const MapSection = ({ handleDotClick }) => {
  return (
    <TransformWrapper
      // initialScale={1}
      doubleClick={{ disabled: true }}
      //wheel={{step:0.01, smoothStep:0.01}}
      disablePadding={true}
      maxScale={15}
      minScale={1}
      initialPositionX={-180}
      initialPositionY={-100}
    >
      {({ zoomToElement }) => (
        <TransformComponent wrapperClass='map_wrapper' contentClass='map_wrapper_content'>
          <ZoomableMap handleDotClick={handleDotClick} zoomToElement={zoomToElement} />
        </TransformComponent>
      )}
    </TransformWrapper>
  );
};

export default MapSection;
