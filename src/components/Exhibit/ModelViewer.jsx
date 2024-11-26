import React, { Suspense, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { CameraControls } from '@react-three/drei';

import styled from 'styled-components';
import { COLORS } from '../../styles/variables';
import SvgSelector from '../Shared/SvgSelector';
import { useNavigate } from 'react-router-dom';
import Model from './Model';

const ModelViewer = ({ model }) => {
  const containerRef = useRef(null);
  const navigate = useNavigate();

  const handleGoBack = (e) => {
    navigate(-1);
  };

  return (
    <ModelViewerWr ref={containerRef}>
      <CloseBtn onClick={handleGoBack}>
        <SvgSelector svg='close3d' />
      </CloseBtn>
      <ObsIcon>
        <SvgSelector svg='3dObs' />
      </ObsIcon>
      <Suspense fallback={<Loader />}>
        <Canvas key={model} camera={{ fov: 45, position: [0, 5, 10] }}>
          <CameraControls minDistance={2} maxDistance={30} />
          <ambientLight intensity={5} />
          {/*<directionalLight*/}
          {/*  position={[5, 10, 5]}*/}
          {/*  intensity={6}*/}
          {/*  castShadow*/}
          {/*/>*/}
          <Model model={model} />
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

const Loader = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 5.13vw;
  aspect-ratio: 1;
  border-radius: 50%;
  background: #fff;
  opacity: 0.7;
  box-shadow: 0 0 0 0 #fff;
  animation: l1 1s infinite;

  @keyframes l1 {
    100% {
      box-shadow: 0 0 0 7vw #0000;
    }
  }
`;

export default ModelViewer;
