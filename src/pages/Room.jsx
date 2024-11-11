import React from 'react';
import { styled } from 'styled-components';
import AudioGuide from '../components/Room/AudioGuide';
import Controls from '../components/Room/Controls';

const Room = ({ data }) => {
  return (
    <RoomWr>
      <RoomImgBlock img={data.bgImg}>{data.name}</RoomImgBlock>
      <RoomMainBlock>
        <AudioGuide audioSrc={data.audio} />
        <Controls background />
      </RoomMainBlock>
    </RoomWr>
  );
};

const RoomWr = styled.div`
  width: 100%;
  height: 100vh;
`;

const RoomImgBlock = styled.div`
  background-image: ${({ img }) => `url(${img})`};
  background-size: cover;
  background-position: center;
  height: 80%;
`;

const RoomMainBlock = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
`;

export default Room;
