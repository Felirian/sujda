import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import frame from '../assets/rooms/secret/mirror-bg.png';
import glass from '../assets/rooms/secret/mirror-glass.png';

import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import { PERSONS } from '../features/data';
import Button from '../components/Shared/Button';
import { Link } from 'react-router-dom';
import { COLORS } from '../styles/variables';
import { H3, P2 } from '../styles/textTags';
import CustomButton from "../components/Shared/CustomButton";

const Secret = () => {
  const [currentPerson, setCurrentPerson] = useState(PERSONS[0]);
  const [fadeOut, setFadeOut] = useState(false);
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

  return (
    <SecretRoomWr>
      <GlassImg src={glass} alt={'glass'} />
      <FrameImg src={frame} alt={'frame'} />
      <SwiperContainer>
        <Swiper
          slidesPerView={1}
          spaceBetween={28}
          speed={1000}
          loop={true}
          pagination={{
            clickable: true,
            el: '.swiper-pagination',
            bulletClass: 'swiper-pagination-bullet',
            bulletActiveClass: 'swiper-pagination-bullet-active',
          }}
          onSlideChange={handleSlideChange}
          modules={[FreeMode, Pagination]}
          className='mySwiper'
        >
          {PERSONS.map((person, index) => (
            <PersonSlide key={index}>
              <Personimg src={person.image} alt={person.name} />
            </PersonSlide>
          ))}
        </Swiper>
      </SwiperContainer>

      <BottomContainer>
        <SwiperPaginationWrapper>
          <SwiperPagination className='swiper-pagination' />
        </SwiperPaginationWrapper>

        <SwiperText fadeOut={fadeOut}>
          <H3>{currentPerson?.name}</H3>
          <P2>{currentPerson?.info}</P2>
        </SwiperText>
        <MainBtn to={'/'}>
          <CustomButton type={'sand'}>узнать больше</CustomButton>
        </MainBtn>
      </BottomContainer>
    </SecretRoomWr>
  );
};

export default Secret;

const SecretRoomWr = styled.div`
  display: flex;
  height: 100vh;
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
const SwiperContainer = styled.div`
  position: absolute;
  bottom: 79vw;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
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
  align-items: start;
  justify-content: center;
  opacity: ${({ fadeOut }) => (fadeOut ? 0 : 1)};
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
    margin: 0 5px;
  }

  .swiper-pagination-bullet-active {
    background-color: ${COLORS.red};
  }
`;

const PersonSlide = styled(SwiperSlide)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
`;

const Personimg = styled.img`
  width: 90%;
  height: auto;
`;

const MainBtn = styled(Link)`
  width: 57.69vw;
  padding: 0.77vw;
  background-color: ${COLORS.sand};
  z-index: 3;
  text-align: center;
  margin-top: 12vw;
`;