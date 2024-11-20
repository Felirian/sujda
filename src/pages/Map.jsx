import React, { useState, useRef } from 'react';
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch';
import { styled } from 'styled-components';
import { COLORS } from '../styles/variables';
import CustomButton from "../components/Shared/CustomButton";
import { Link } from "react-router-dom";
import { MAP_POINTS } from '../features/data.js';
import { H1Style, P1Style } from '../styles/textTags';

const Map = () => {
    const [audioProgress, setAudioProgress] = useState(0);
    const [selectedPoint, setSelectedPoint] = useState(null);
    const audioRef = useRef(null);

    const handlePlayPause = () => {
        if (audioRef.current.paused) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
    };

    const updateProgress = () => {
        const progress = (audioRef.current.currentTime / audioRef.current.duration) * 100;
        setAudioProgress(progress);
    };

    const handleDotClick = (point) => {
        setSelectedPoint(point);
    };

    return (
        <MapWr>
            {/* Карта */}
            <TransformWrapper centerOnInit initialScale={1} doubleClick={{ disabled: true }} maxScale={5}>
                <TransformComponent wrapperClass="map_wrapper" contentClass="map_wrapper_content">
                    <ZoomableMap>
                        <img src="map.png" alt="Карта" style={{ width: '100%', height: 'auto' }} />
                        {MAP_POINTS.map((point) => (
                            <Dot
                                key={point.id}
                                onClick={() => handleDotClick(point)}
                                style={{ top: `${point.top}px`, left: `${point.left}px` }}
                            />
                        ))}
                    </ZoomableMap>
                </TransformComponent>
            </TransformWrapper>

            {/* Информация по точке */}
            {selectedPoint && (
                <InfoSection className={selectedPoint ? 'open' : ''}>
                    <Title>{selectedPoint.name}</Title>
                    <Info>{selectedPoint.info}</Info>
                    <CloseButton onClick={() => setSelectedPoint(null)}>×</CloseButton>
                </InfoSection>
            )}

            {/* Нижний блок */}
            <BottomBar>
                <AudioControls>
                    <div className="play-button" onClick={handlePlayPause}/>
                    <div className="progress-bar">
                        <div className="progress" style={{
                            width: `${audioProgress}%`,
                            backgroundColor: audioProgress > 0 ? `${COLORS.yellow}` : `${COLORS.white}`,
                        }}/>
                    </div>

                </AudioControls>
                <Link to="/museum">
                    <CustomButton type="orange">в музей</CustomButton>
                </Link>
                <audio
                    ref={audioRef}
                    src="audio_sample.mp3"
                    onTimeUpdate={updateProgress}
                    style={{ display: 'none' }}
                />
            </BottomBar>
        </MapWr>
    );
};


const MapWr = styled.div`
    width: 100%;
    overflow: hidden;
    margin-top: 30px;
    position: relative;

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
`;

const Title = styled.h1`
    ${H1Style};
`;

const Info = styled.p`
    ${P1Style};
`;

const InfoSection = styled.div`
    background-color: ${COLORS.green};
    padding: 20px;
    justify-content: flex-start;
    position: fixed;
    bottom: -100%;
    width: 100%;
    z-index: 20;
    box-shadow: 0 -10px 30px rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border-radius: 20px 20px 0 0;
    transition: bottom 0.5s ease-in-out;
    max-height: 50vh;
    overflow-y: auto;

    &.open {
        bottom: 0;
    }
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

const BottomBar = styled.div`
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: ${COLORS.green};
    padding: 10px 20px;
    border-radius: 20px 20px 0 0;
    box-shadow: 0 -5px 15px rgba(0, 0, 0, 0.3);
    z-index: 10;
`;

const AudioControls = styled.div`
    display: flex;
    align-items: center;
    padding: 10px;
    background-color: ${COLORS.green};
    border-radius: 10px;
    margin-bottom: 10px;

    .play-button {
        width: 20px;
        height: 20px;
        background-color: ${COLORS.yellow};
        clip-path: polygon(0 0, 100% 50%, 0 100%);
        cursor: pointer;
        margin-right: 10px;
    }

    .progress-bar {
        height: 8px;
        background-color: ${COLORS.yellow};
        border-radius: 4px;
        flex: 1;
        position: relative;
    }

    .progress {
        height: 100%;
        background-color: ${COLORS.orange};
        border-radius: 4px;
        width: 0;
        position: absolute;
        top: 0;
        left: 0;
    }
`;

export default Map;
