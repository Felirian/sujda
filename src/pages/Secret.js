import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import frame from '../assets/rooms/secret/mirror-bg.png';
import glass from '../assets/rooms/secret/mirror-glass.png';
import { PERSONS } from '../features/data';
import { COLORS } from '../styles/variables';
import { H1, H3, P2 } from '../styles/textTags';
import CustomButton from '../components/Shared/CustomButton';
import LongFrameCard from '../components/Shared/LongFrameCard';
import Header from '../components/Shared/Header';
import CustomSlider from '../components/Room/Secret/CustomSlider';
import PopUpScroller from '../components/Shared/PopUpScroller';
import SecretWords from '../components/Room/Secret/SecretWords';

const Secret = () => {
  const [currentPerson, setCurrentPerson] = useState(PERSONS[0]);
  const [fadeOut, setFadeOut] = useState(false);
  const [popUp, setPopUp] = useState(false);

  const prevIndexRef = useRef(0);

  const handleSlideChange = (swiper) => {
    const selectedPerson = PERSONS[swiper.realIndex];
    if (swiper.realIndex !== prevIndexRef.current) {
      setFadeOut(true);
      setTimeout(() => {
        setCurrentPerson(selectedPerson);
        setFadeOut(false);
        prevIndexRef.current = swiper.realIndex;
      }, 300);
    }
  };

  const handleClosePopUp = () => {
    setPopUp(false);
  };

  return (
    <SecretRoomWr>
      <Header map home />
      <SecretWords />
      <Header map/>
      <GlassImg src={glass} alt={'glass'} />
      <FrameImg src={frame} alt={'frame'} />
      <CustomSlider onSlideChange={handleSlideChange} />

      <BottomContainer>
        <SwiperPaginationWrapper>
          <SwiperPagination className='swiper-pagination' />
        </SwiperPaginationWrapper>

        <SwiperText $fadeOut={fadeOut}>
          <H3>{currentPerson?.name}</H3>
          <P2>{currentPerson?.info}</P2>
        </SwiperText>
        <MainBtn onClick={() => setPopUp(true)}>
          <CustomButton type={'send'}>узнать больше</CustomButton>
        </MainBtn>
      </BottomContainer>

      <PopUpScroller popUp={popUp} onClose={handleClosePopUp}>
        <LongFrameCard>
          <StoryWr>
            <H1Styled>{currentPerson?.name.split(' ')[0]}</H1Styled>
            <P2>{currentPerson?.story}</P2>
          </StoryWr>
        </LongFrameCard>
      </PopUpScroller>
    </SecretRoomWr>
  );
};

const SecretRoomWr = styled.div`
  display: flex;
  height: 100svh;
  overflow: hidden;
  position: relative;
  justify-content: center;
  align-items: center;
`;

const FrameImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: bottom;
  pointer-events: none;
  position: absolute;
  z-index: 2;
  bottom: 0%;
`;

const GlassImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: bottom;
  pointer-events: none;
  position: absolute;
  z-index: 1;
  bottom: 0%;
`;

const BottomContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 10;
  padding: 12vw 5vw;
  margin-top: auto;
`;

const SwiperText = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: auto;
  opacity: ${(props) => (props.$fadeOut ? 0 : 1)};
  transition: opacity 0.3s ease-in-out;
`;

const SwiperPaginationWrapper = styled.div`
  width: 100%;
  height: 3vw;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 0;
`;

const SwiperPagination = styled.div`
  position: absolute;
  top: 0;
  .swiper-pagination-bullet {
    width: 3vw;
    height: 3vw;
    background-color: ${COLORS.sand};
    opacity: 1;
    border-radius: 0;
    margin: 0 1.282vw;
  }

  .swiper-pagination-bullet-active {
    background-color: ${COLORS.red};
  }
`;

const MainBtn = styled.button`
  width: 57.69vw;
  padding: 0.77vw;
  background-color: ${COLORS.sand};
  z-index: 3;
  text-align: center;
  margin-top: 12vw;
`;

const StoryWr = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6vw;
  span {
    font-style: italic;
  }
`;

const H1Styled = styled(H1)`
  text-transform: uppercase;
`;

export default Secret;
