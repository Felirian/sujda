import React from 'react';
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch';

import ZoomableMap from './ZoomableMap';

const MapSection = ({ handleDotClick }) => {
  return (
    <TransformWrapper
      centerOnInit
      initialScale={1}
      doubleClick={{ disabled: true }}
      maxScale={6}
      minScale={1}
      limitToBounds={false}
      minPositionX={-300}
      maxPositionX={-600}
      minPositionY={-100}
      maxPositionY={-300}
    >
      <TransformComponent wrapperClass='map_wrapper' contentClass='map_wrapper_content'>
        <ZoomableMap handleDotClick={handleDotClick} />
      </TransformComponent>
    </TransformWrapper>
  );
};

export default MapSection;
