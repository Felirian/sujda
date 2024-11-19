import React from 'react';
import mapImg from '../assets/map/map.jpg';
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch';
import { styled } from 'styled-components';
import { COLORS } from '../styles/variables';
import CustomButton from '../components/Shared/CustomButton';
import { Link } from 'react-router-dom';

const Map = () => {
  return (
    <MapWr>
      <TransformWrapper centerOnInit initialScale={1} doubleClick={{ disabled: true }} maxScale={5}>
        <>
          <TransformComponent wrapperClass='map_wrapper' contentClass='map_wrapper_content'>
            <ZoomableMap>
              <img src={mapImg} alt='Карта' />
            </ZoomableMap>
          </TransformComponent>
        </>
      </TransformWrapper>
      <Link to='/museum'>
        <CustomButton type={'orange'}>в музей</CustomButton>
      </Link>
    </MapWr>
  );
};

const MapWr = styled.div`
  width: 100%;
  overflow: hidden;
  .map_wrapper {
    width: 100%;
  }
  .map_wrapper_content {
  }
`;

const ZoomableMap = styled.div`
  background-color: ${COLORS.brown};
  width: 900px;
  height: 700px;
  font-size: 70px;
`;

export default Map;
