import React, { useEffect, useRef, useState } from 'react';
import { styled } from 'styled-components';
import { COLORS } from '../../styles/variables';

const AudioGuide = ({ audioSrc }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [savedVolume, setSavedVolume] = useState(0.4);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = savedVolume;

      const updateDuration = () => setDuration(audioRef.current.duration);
      const updateTime = () => setCurrentTime(audioRef.current.currentTime);

      audioRef.current.addEventListener('loadedmetadata', updateDuration);
      audioRef.current.addEventListener('timeupdate', updateTime);
      audioRef.current.addEventListener('ended', () => setIsPlaying(false));

      // return () => {
      //   audioRef.current.removeEventListener('loadedmetadata', updateDuration);
      //   audioRef.current.removeEventListener('timeupdate', updateTime);
      //   audioRef.current.removeEventListener('ended', () => setIsPlaying(false));
      // };
    }
  }, [audioSrc]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
      setCurrentTime(0);
    }
  }, [audioSrc]);

  const togglePlay = () => {
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
      <TimeDisplay>
        {formatTime(currentTime)} / {formatTime(duration)}
      </TimeDisplay>
      <audio ref={audioRef} src={audioSrc} />
    </AudioGuideWr>
  );
};

const AudioGuideWr = styled.div`
  height: 10.26vw;
  border-radius: 6.15vw 6.15vw 0 0;
  background-color: ${COLORS.green};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5.13vw 5.13vw 0;
`;

const PlayButton = styled.button`
  color: ${COLORS.white};
  font-size: 6vw;
  cursor: pointer;
  width: 3vw;
`;

const ProgressContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 1.4vw;
  background-color: ${COLORS.white};
  margin: 0 6.7vw 0;
  cursor: pointer;
  width: 55.13vw;
  padding: 0 0.5vw;
`;

const ProgressBar = styled.div`
  height: 1vw;
  background-color: ${COLORS.yellow};
  width: 0;
`;

const TimeDisplay = styled.span`
  font-family: sans-serif;
  font-weight: 700;
  font-size: 3.08vw;
  white-space: nowrap;
`;

export default AudioGuide;
