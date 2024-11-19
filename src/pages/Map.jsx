import React, {useState} from 'react';
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch';
import { styled } from 'styled-components';
import { COLORS } from '../styles/variables';
import CustomButton from "../components/Shared/CustomButton";
import {Link} from "react-router-dom";
import { MAP_POINTS } from '../features/data.js';
import { H1Style, P1Style } from '../styles/textTags';

const Map = () => {

    const [selectedPoint, setSelectedPoint] = useState(null);
    const handleDotClick = (point) => {
        setSelectedPoint(point);
    };

    return (
        <MapWr>
            {selectedPoint && <Overlay onClick={() => setSelectedPoint(null)} />}
            <TransformWrapper centerOnInit initialScale={1} doubleClick={{ disabled: true }} maxScale={5}>
                <>
                    <TransformComponent wrapperClass='map_wrapper' contentClass='map_wrapper_content'>
                        <ZoomableMap>
                            <img src="map.png" alt="Карта" style={{width: '100%', height: 'auto'}}/>

                            {MAP_POINTS.map((point, index) => (
                                <Dot
                                    key={point.id}
                                    onClick={() => handleDotClick(point)}
                                    style={{ top: `${point.top}px`, left: `${point.left}px` }}
                                />
                            ))}


                        </ZoomableMap>
                    </TransformComponent>
                </>
            </TransformWrapper>
            <Link to="/museum">
                <CustomButton type={'orange'}>в музей</CustomButton>
            </Link>

            {selectedPoint && (
                <InfoSection>
                    <Title>{selectedPoint.name}</Title>
                    <Info>{selectedPoint.info}</Info>
                    <CloseButton onClick={() => setSelectedPoint(null)}>×</CloseButton>
                </InfoSection>
            )}

        </MapWr>
    );
};

const MapWr = styled.div`
    width: 100%;
    overflow: hidden;
    margin-top: 30px;
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

const Dot = styled.div`
  width: 20px;
  height: 20px;
  background-color: ${COLORS.yellow};
  border: 2px solid ${COLORS.white};
    border-radius: 50%;
  position: absolute;
  cursor: pointer;
`;

const Title = styled.h1`
  ${H1Style};
`;

const Info = styled.p`
  ${P1Style};
`;

const InfoSection = styled.div`
  background-color: ${COLORS.green};
  padding: 20%;
    position: fixed;
  bottom: 0;
  width: 100%;
    z-index: 20;
`;

const CloseButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    width: 30px;
    height: 30px;
    background-color: ${COLORS.red};
    color: ${COLORS.white};
    border: none;
    border-radius: 50%;
    font-size: 20px;
    font-weight: bold;
    line-height: 30px;
    text-align: center;
    cursor: pointer;
    z-index: 20;
`;

const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 10;
`;

export default Map;
