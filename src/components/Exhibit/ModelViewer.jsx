import React, { Suspense, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { CameraControls } from '@react-three/drei';

import styled from 'styled-components';
import { COLORS } from '../../styles/variables';
import SvgSelector from '../Shared/SvgSelector';
import { useNavigate } from 'react-router-dom';
import Model from './Model';
import clickpng from '../../assets/rooms/click.png';
import Loader from '../Shared/Loader';

const ModelViewer = ({ model }) => {
  const containerRef = useRef(null);
  const navigate = useNavigate();
  const [isLoadingModel, setIsLoadingModel] = useState(false);
  const [hasAnimation, setHasAnimation] = useState(false);

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <ModelViewerWr ref={containerRef}>
      <CloseBtn onClick={handleGoBack}>
        <SvgSelector svg='close3d' />
      </CloseBtn>
      {hasAnimation && <AnimationPointer src={clickpng} />}
      <ObsIcon>
        <SvgSelector svg='3dObs' />
      </ObsIcon>
      <Suspense fallback={<Loader />}>
        {isLoadingModel && <Loader />}
        <Canvas key={model} camera={{ fov: 45, position: [0, 5, 10] }}>
          <CameraControls minDistance={2} maxDistance={30} />
          <ambientLight intensity={2} />
          <directionalLight position={[2, 5, 2]} intensity={2} castShadow />
          <Model
            model={model}
            setHasAnimation={setHasAnimation}
            setIsLoadingModel={setIsLoadingModel}
          />
        </Canvas>
      </Suspense>
    </ModelViewerWr>
  );
};

const ModelViewerWr = styled.div`
  z-index: 10;
  width: 100vw;
  height: 100vh;
  height: 100svh;
  background-color: ${COLORS.dark};
`;

const CloseBtn = styled.button`
  position: absolute;
  top: 6.15vw;
  right: 6.15vw;
  z-index: 11;
  width: 10.26vw;
  height: 10.26vw;
  svg {
    width: 100%;
    height: 100%;
  }
  &:active {
    opacity: 0.8;
  }
`;

const ObsIcon = styled.div`
  position: absolute;
  bottom: 12.82vw;
  left: 50%;
  transform: translateX(-50%);

  width: 26.92vw;
  height: 26.92vw;

  z-index: 11;
  svg {
    width: 100%;
    height: 100%;
  }
`;

const AnimationPointer = styled.img`
  position: absolute;
  pointer-events: none;
  width: 20vw;
  height: 20vw;
  top: 45%;
  left: 50%;
  z-index: 11;
  animation: displaying 3s 1s ease both;
  @keyframes displaying {
    0% {
      opacity: 0;
      transform: translateY(-20%) scale(1);
    }
    40% {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
    50% {
      opacity: 1;
      transform: translateY(0) scale(0.8);
    }
    70% {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
    80% {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
    100% {
      opacity: 0;
      transform: translateY(-20%) scale(1);
    }
  }
`;

export default ModelViewer;
