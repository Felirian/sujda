import React, { useEffect, useRef } from 'react';
import { styled } from 'styled-components';
import { COLORS } from '../../styles/variables';

const AudioGuide = ({ audioSrc }) => {
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.4;
    }
  }, []);

  return (
    <AudioGuideWr>
      <Audio ref={audioRef} controls src={audioSrc} />
    </AudioGuideWr>
  );
};

const AudioGuideWr = styled.div`
  height: 10.26vw;
  border-radius: 6.15vw 6.15vw 0 0;
  background-color: ${COLORS.green};
  display: flex;
  align-items: end;
  justify-content: center;
`;

const Audio = styled.audio`
  height: 6vw;
  width: 90vw;
`;

export default AudioGuide;
