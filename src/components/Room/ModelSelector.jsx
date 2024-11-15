import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from 'styled-components';

import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import { Link } from 'react-router-dom';
import SvgSelector from '../Shared/SvgSelector';

const ModelSelector = ({ exhibits }) => {
  return (
    <ModelSelectorWr>
      <div className='swiper-button-prev'></div>
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        spaceBetween={1}
        slidesPerView={3}
      >
        {exhibits.map((item, index) => (
          <SwiperSlide key={index}>
            <SlideContainer to={`${item.route}`}>
              <ImageWrapper>
                <SvgSelector svg='cardBg' />
                <img src={item.preview} alt={item.name} />
              </ImageWrapper>
            </SlideContainer>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className='swiper-button-next'></div>
    </ModelSelectorWr>
  );
};

const ModelSelectorWr = styled.div`
  position: relative;
  bottom: 62vw;
  width: 76.92vw;
  left: 50%;
  transform: translateX(-50%);
  .swiper-button-prev,
  .swiper-button-next {
    color: white;

    &::after {
      font-size: 7.18vw;
    }
  }
  .swiper-button-prev {
    left: -8vw;
  }
  .swiper-button-next {
    right: -8vw;
  }
`;

const SlideContainer = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ImageWrapper = styled.div`
  width: 24.36vw;
  height: 28.46vw;
  padding: 3.08vw;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
  svg {
    z-index: -1;
    position: absolute;
    width: 100%;
    height: 100%;
  }

  img {
    width: 20.51vw;
    height: 20.51vw;
    object-fit: contain;
  }
`;

export default ModelSelector;
