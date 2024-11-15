import React, { useEffect, useRef, useState } from 'react';
import { styled } from 'styled-components';
import { COLORS } from '../../styles/variables';
import SvgSelector from '../Shared/SvgSelector';
import { Link } from 'react-router-dom';

const AudioGuide = ({ audioSrc, setModalIsOpen, allowPlay }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [savedVolume, setSavedVolume] = useState(0.4);

  useEffect(() => {
    if (audioRef.current) {
      const audio = audioRef.current;
      audio.volume = savedVolume;

      const updateDuration = () => setDuration(audio.duration);
      const updateTime = () => setCurrentTime(audio.currentTime);

      audio.addEventListener('loadedmetadata', updateDuration);
      audio.addEventListener('timeupdate', updateTime);
      audio.addEventListener('ended', () => setIsPlaying(false));

      return () => {
        audio.removeEventListener('loadedmetadata', updateDuration);
        audio.removeEventListener('timeupdate', updateTime);
        audio.removeEventListener('ended', () => setIsPlaying(false));
      };
    }
  }, [audioSrc, savedVolume]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
      setCurrentTime(0);
    }
  }, [audioSrc]);

  useEffect(() => {
    if (allowPlay) {
      togglePlay();
    }
  }, [allowPlay]);

  const togglePlay = () => {
    if (!allowPlay) {
      setModalIsOpen(true);
      return;
    }

    if (audioRef.current.paused) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const handleProgressClick = (e) => {
    const progressWidth = e.currentTarget.clientWidth;
    const clickX = e.nativeEvent.offsetX;
    const newTime = (clickX / progressWidth) * duration;
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handleDrag = (e) => {
    if (isDragging) {
      const progressWidth = e.currentTarget.clientWidth;
      const clientX = e.type.includes('mouse')
        ? e.nativeEvent.offsetX
        : e.touches[0].clientX - e.currentTarget.getBoundingClientRect().left;
      const newTime = (clientX / progressWidth) * duration;
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const startDrag = () => {
    setIsDragging(true);
    setSavedVolume(audioRef.current.volume);
    audioRef.current.volume = 0;
  };

  const stopDrag = () => {
    setIsDragging(false);
    audioRef.current.volume = savedVolume;
  };

  return (
    <AudioGuideWr>
      <PlayButton onClick={togglePlay}>{isPlaying ? '❚❚' : '▶'}</PlayButton>
      <ProgressContainer
        onClick={handleProgressClick}
        onMouseDown={startDrag}
        onMouseMove={handleDrag}
        onMouseUp={stopDrag}
        onTouchStart={startDrag}
        onTouchMove={handleDrag}
        onTouchEnd={stopDrag}
      >
        <ProgressBar style={{ width: `${(currentTime / duration) * 100}%` }} />
      </ProgressContainer>
      <QuizButton to='quiz'>
        <SvgSelector svg='quiz' />
      </QuizButton>
      <TimeDisplay>
        <span>{formatTime(currentTime)}</span> / {formatTime(duration)}
      </TimeDisplay>
      <audio ref={audioRef} src={audioSrc} />
    </AudioGuideWr>
  );
};

const AudioGuideWr = styled.div`
  position: relative;
  height: 10.26vw;
  border-radius: 6.15vw 6.15vw 0 0;
  background-color: ${COLORS.green};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5.13vw 5.13vw 0;
  margin-bottom: -0.5vw;
`;

const QuizButton = styled(Link)`
  width: 11.54vw;
  height: 11.54vw;
  svg {
    width: 100%;
    height: 100%;
  }
`;

const PlayButton = styled.button`
  position: relative;
  top: 0;
  color: ${COLORS.white};
  font-size: 6vw;
  cursor: pointer;
  width: 3vw;
`;

const ProgressContainer = styled.div`
  position: relative;
  top: 0;
  left: 1vw;
  display: flex;
  align-items: center;
  height: 1.4vw;
  background-color: ${COLORS.white};
  margin: 0 6.7vw 0;
  cursor: pointer;
  width: 68vw;
  padding: 0 0.2vw;
`;

const ProgressBar = styled.div`
  height: 1vw;
  background-color: ${COLORS.yellow};
  width: 0;
`;

const TimeDisplay = styled.span`
  position: absolute;
  font-family: 'Roboto Slab';
  font-size: 2.05vw;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  white-space: nowrap;
  bottom: -2vw;
  right: 21.5vw;
  span {
    color: ${COLORS.yellow};
  }
`;

export default AudioGuide;
