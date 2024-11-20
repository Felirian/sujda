import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import { PERSONS } from '../../../features/data';

const CustomSlider = ({ onSlideChange }) => {
  return (
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
        onSlideChange={onSlideChange}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {PERSONS.map((person, index) => (
          <PersonSlide key={index}>
            <Personimg src={person.image} alt={person.name} />
          </PersonSlide>
        ))}
      </Swiper>
    </SwiperContainer>
  );
};

export default CustomSlider;

const SwiperContainer = styled.div`
  position: absolute;
  bottom: 77vw;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PersonSlide = styled(SwiperSlide)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Personimg = styled.img`
  width: 90%;
  height: auto;
`;