import React, { useEffect, useRef, useState } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { AnimationMixer } from 'three';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
import * as THREE from 'three';

const Model = ({ model, setHasAnimation }) => {
  const [scene, setScene] = useState(null);
  const [animMixer, setAnimMixer] = useState(null);
  const [action, setAction] = useState(null);
  const [isPlayingForward, setIsPlayingForward] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false); // Флаг для отслеживания состояния анимации

  const clock = useRef(new THREE.Clock());

  useEffect(() => {
    const loader = new GLTFLoader();

    // это нужно, чтобы распаковать сжатые модельки
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/');
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

          setHasAnimation(true);
        }

        setAnimMixer(mixer);
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

  // const handleClick = () => {
  //   if (!action) return;
  //   action.reset();

  //   if (isPlayingForward) {
  //     //action.reset(); // Сбрасываем анимацию
  //     action.timeScale = 1; // Воспроизведение вперёд
  //     action.play(); // Запуск анимации
  //   } else {
  //     //action.reset(); // Сбрасываем анимацию
  //     action.time = action.getClip().duration; // Устанавливаем время на конец анимации
  //     action.timeScale = -1; // Воспроизведение назад
  //     action.paused = false; // Разблокируем воспроизведение
  //     action.play();
  //   }
  //   setIsPlayingForward(!isPlayingForward); // Переключаем направление
  // };

  const handleClick = () => {
    if (!action || isPlaying) return; // Игнорируем, если анимация проигрывается

    setIsPlaying(true); // Блокируем клики во время анимации

    if (isPlayingForward) {
      action.reset(); // Сбрасываем анимацию
      action.timeScale = 1; // Воспроизведение вперёд
    } else {
      action.reset(); // Сбрасываем анимацию
      action.time = action.getClip().duration; // Устанавливаем время на конец анимации
      action.timeScale = -1; // Воспроизведение назад
    }

    action.play();

    // Снимаем блокировку после завершения анимации
    action.getMixer().addEventListener('finished', () => {
      setIsPlaying(false); // Снимаем блокировку
      setIsPlayingForward(!isPlayingForward); // Переключаем направление анимации
    });
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
