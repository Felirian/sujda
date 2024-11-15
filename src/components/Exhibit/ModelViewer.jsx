import React, { Suspense, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { CameraControls, useGLTF } from '@react-three/drei';
import styled from 'styled-components';
import { COLORS } from '../../styles/variables';
import SvgSelector from '../Shared/SvgSelector';
import { P2 } from '../../styles/textTags';
import { useNavigate } from 'react-router-dom';

const Model = ({ model }) => {
  const { scene, error } = useGLTF(`/models/${model}.glb`, true);
  if (error) {
    console.error('Failed to load model:', error);
    return <ErrorMessage>Ошибка загрузки модели</ErrorMessage>;
  }
  return <primitive object={scene} scale={0.8} position={[0, -1, 0]} />;
};

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
      <Suspense fallback={<div>Загрузка модели...</div>}>
        <Canvas key={model} camera={{ fov: 45, position: [0, 1, 5] }}>
          <CameraControls minDistance={2} maxDistance={12} />
          <ambientLight intensity={8} />
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

const ErrorMessage = styled(P2)`
  color: ${COLORS.red};
  text-align: center;
`;

export default ModelViewer;
