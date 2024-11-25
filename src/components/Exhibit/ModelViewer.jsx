import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { CameraControls, useGLTF } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import styled from "styled-components";
import { COLORS } from "../../styles/variables";
import SvgSelector from "../Shared/SvgSelector";
import { P1Style, P2 } from "../../styles/textTags";
import { useNavigate } from "react-router-dom";
import { AnimationMixer } from "three";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import * as THREE from "three";

const Model = ({ model }) => {
  const [scene, setScene] = useState(null);
  const [animMixer, setAnimMixer] = useState(null);
  const [action, setAction] = useState(null);
  const [isPlayingForward, setIsPlayingForward] = useState(true);
  const [error, setError] = useState(null);

  const clock = useRef(new THREE.Clock());

  useEffect(() => {
    const loader = new GLTFLoader();

    // это нужно, чтобы распаковать сжатые модельки
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath("https://www.gstatic.com/draco/v1/decoders/");
    loader.setDRACOLoader(dracoLoader);

    let mixer = null;

    loader.load(
      `/models/${model}.glb`,
      (gltf) => {
        setScene(gltf.scene);

        if (gltf.animations && gltf.animations.length > 0) {
          mixer = new AnimationMixer(gltf.scene);
          const newAction = mixer.clipAction(gltf.animations[0]); // Берём первую анимацию
          newAction.setLoop(THREE.LoopOnce); // Воспроизводится только один раз
          newAction.clampWhenFinished = true; // Завершается в конечной позиции
          setAction(newAction);
        }

        setAnimMixer(mixer);
      },
      undefined,
      (err) => {
        console.error("Failed to load model:", err);
        setError(err);
      }
    );

    return () => {
      if (mixer) {
        mixer.stopAllAction();
        mixer.uncacheRoot(mixer.getRoot());
      }
    };
  }, [model]);
  useEffect(() => {
    if (animMixer) {
      const animate = () => {
        const delta = clock.current.getDelta();
        animMixer.update(delta);
        requestAnimationFrame(animate);
      };
      animate();
    }
  }, [animMixer]);

  const handleClick = () => {
    if (!action) return;

    if (isPlayingForward) {
      action.reset(); // Сбрасываем анимацию
      action.timeScale = 1; // Воспроизведение вперёд
      action.play(); // Запуск анимации
    } else {
      action.reset(); // Сбрасываем анимацию
      action.time = action.getClip().duration; // Устанавливаем время на конец анимации
      action.timeScale = -1; // Воспроизведение назад
      action.paused = false; // Разблокируем воспроизведение
      action.play();
    }

    setIsPlayingForward(!isPlayingForward); // Переключаем направление
  };

  return (
    scene && (
      <primitive
        object={scene}
        onClick={handleClick} // Добавляем обработчик клика
      />
    )
  );
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
        <SvgSelector svg="close3d" />
      </CloseBtn>
      <ObsIcon>
        <SvgSelector svg="3dObs" />
      </ObsIcon>
      <Suspense fallback={<Loader />}>
        <Canvas
          key={model}
          camera={{ fov: 45, position: [0, 5, 10] }}
        >
          <CameraControls
            minDistance={2}
            maxDistance={30}
          />
          <ambientLight intensity={5} />
          <directionalLight
            position={[5, 10, 5]}
            intensity={6}
            castShadow
          />
          <Model model={model} />
        </Canvas>
      </Suspense>
    </ModelViewerWr>
  );
};

const ModelViewerWr = styled.div`
  z-index: 10;
  width: 100vw;
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

const ErrorMessage = styled(P2)`
  ${P1Style};
  color: ${COLORS.red};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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
