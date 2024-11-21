import React from 'react';
import { KeepScale, TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch';
import { MAP_POINTS } from '../../features/data';
import { styled } from 'styled-components';
import mapImage from '../../assets/map/map.jpg';
import SvgSelector from '../Shared/SvgSelector';

const MapSection = ({ handleDotClick }) => {
  return (
    <TransformWrapper centerOnInit initialScale={1} doubleClick={{ disabled: true }} maxScale={5}>
      <TransformComponent wrapperClass='map_wrapper' contentClass='map_wrapper_content'>
        <ZoomableMap>
          <img src={mapImage} alt='Карта' style={{ width: '100%', height: 'auto' }} />

          {MAP_POINTS.map((point, index) => (
            <Dot
              key={index}
              onClick={() => handleDotClick(point)}
              style={{ top: `${point.top}px`, left: `${point.left}px` }}
            >
              <KeepScale>
                <SvgSelector svg='mapPoint' />
              </KeepScale>
            </Dot>
          ))}
        </ZoomableMap>
      </TransformComponent>
    </TransformWrapper>
  );
};

const ZoomableMap = styled.div`
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

export default MapSection;
