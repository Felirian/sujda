import React, { useState } from 'react';
import styled from 'styled-components';
import frame from '../assets/rooms/secret/mirror-bg.png';
import glass from '../assets/rooms/secret/mirror-glass.png';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import { PERSONS } from '../features/data';
import Button from '../components/Shared/Button';
import { Link } from 'react-router-dom';
import { COLORS } from '../styles/variables';

const Secret = () => {
  const [currentPerson, setCurrentPerson] = useState(null);

  const handleSlideChange = (swiper) => {
    const selectedPerson = PERSONS[swiper.realIndex];
    setCurrentPerson(selectedPerson);
    console.log(currentPerson?.name);
  };

  return (
    <SecretRoomWr>
      <SecretRoomContainer>
        <GlassImg src={glass} alt={'fff'} />
        <FrameImg src={frame} alt={'fff'} />
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
            modules={[FreeMode, Pagination, Autoplay]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: true,
            }}
            className="mySwiper"
          >
            {PERSONS.map((person, index) => (
              <PersonSlide key={index}>
                <Personimg src={person.image} alt={person.name} />
              </PersonSlide>
            ))}
          </Swiper>
        </SwiperContainer>
      </SecretRoomContainer>
      <SwiperPagination className="swiper-pagination" />
      <SwiperText>
        <p>{currentPerson?.name}</p>
        <p>{currentPerson?.info}</p>
      </SwiperText>

      <MainBtn to={'/'}>
        <Button type={'sand'}>узнать больше</Button>
      </MainBtn>
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

const SecretRoomContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 3;
  width: 100%;
  height: 100%;
  position: relative;
`;

const FrameImg = styled.img`
  width: 100%;
  height: auto;
  pointer-events: none;
  position: absolute;
  z-index: 2;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const GlassImg = styled.img`
  width: 100%;
  height: auto;
  pointer-events: none;
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const SwiperContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SwiperText = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 3;
  bottom: 0%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const SwiperPagination = styled.div`
  position: absolute;
  bottom: 20%; 
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;

  .swiper-pagination-bullet {
    width: 10px;
    height: 10px;
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
  width: 50%;
  height: auto;
`;

const MainBtn = styled(Link)`
  width: 57.69vw;
  padding: 0.77vw;
  background-color: ${COLORS.sand};
  z-index: 3;
  bottom: 5%;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;
