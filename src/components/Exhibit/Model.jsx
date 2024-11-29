import React, { useEffect, useRef, useState } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { AnimationMixer } from 'three';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
import * as THREE from 'three';

const Model = ({ model, setHasAnimation, setIsLoadingModel }) => {
  const [scene, setScene] = useState(null);
  const [animMixer, setAnimMixer] = useState(null);
  const [actions, setActions] = useState([]);
  const [isPlayingForward, setIsPlayingForward] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  const clock = useRef(new THREE.Clock());

  useEffect(() => {
    const loader = new GLTFLoader();

    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/');
    loader.setDRACOLoader(dracoLoader);

    let mixer = null;
    setIsLoadingModel(true);
    loader.load(
      `/models/${model}.glb`,
      (gltf) => {
        setScene(gltf.scene);

        if (gltf.animations && gltf.animations.length > 0) {
          mixer = new AnimationMixer(gltf.scene);
          const loadedActions = gltf.animations.map((clip) => {
            const action = mixer.clipAction(clip);
            action.setLoop(THREE.LoopOnce); // Однократное воспроизведение
            action.clampWhenFinished = true; // Остановить в конечной точке
            return action;
          });

          setActions(loadedActions);
          setHasAnimation(true);
        }

        setAnimMixer(mixer);
        setIsLoadingModel(false);
      },
      undefined,
      (err) => {
        console.error('Failed to load model:', err);
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
    if (isAnimating || actions.length === 0) return; // Игнорируем клики во время анимации

    setIsAnimating(true); // Устанавливаем флаг анимации

    actions.forEach((action) => {
      action.reset();

      if (isPlayingForward) {
        action.timeScale = 1; // Воспроизведение вперёд
        action.play();
      } else {
        action.time = action.getClip().duration; // Начинаем с конца
        action.timeScale = -1; // Воспроизведение назад
        action.play();
      }

      // Добавляем завершение для каждой анимации
      action.getMixer().addEventListener('finished', () => {
        // Проверяем, все ли анимации завершены
        const allFinished = actions.every(
          (act) => act.time === 0 || act.time === act.getClip().duration
        );
        if (allFinished) {
          setIsAnimating(false); // Снимаем блокировку кликов
        }
      });
    });

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

export default Model;
