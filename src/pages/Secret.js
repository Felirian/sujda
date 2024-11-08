import React, {useState} from 'react';
import styled from "styled-components";
import frame from '../assets/rooms/secret/pngegg.png';

import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, FreeMode, Pagination} from "swiper/modules";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import {PERSONS} from "../features/data";

const Secret = () => {
  const [currentPerson, setCurrentPerson] = useState(null);

  const handleSlideChange = (swiper) => {
    const selectedPerson = PERSONS[swiper.realIndex];
    setCurrentPerson(selectedPerson);
    console.log(currentPerson?.name);
  };

  return (
    <SecretRoomWr>
      <FrameImg src={frame} alt={'fff'}/>
      <Swiper
        slidesPerView={1}
        spaceBetween={28}
        speed={1000}
        loop={true}
        pagination={{
          clickable: true
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
            <Personimg src={person.image} alt={person.name}/>
          </PersonSlide>
        ))}
      </Swiper>
      <br/>
      <br/>
      <br/>
      <p>{currentPerson?.name}</p>
      <p>{currentPerson?.info}</p>

    </SecretRoomWr>
  );
};

const SecretRoomWr = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`
const FrameImg = styled.img`
  width: 100%;
  height: auto;
  pointer-events: none;
  position: absolute;  
  z-index: 2;
`;
const PersonSlide = styled(SwiperSlide)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  margin-top: 300px;
`

const Personimg = styled.img`
  width: 50%;
  height: auto;  
`

export default Secret;