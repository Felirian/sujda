import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import frame from '../assets/rooms/secret/mirror-bg.png';
import glass from '../assets/rooms/secret/mirror-glass.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import { PERSONS } from '../features/data';
import { COLORS } from '../styles/variables';
import { H1, H3, P2 } from '../styles/textTags';
import CustomButton from '../components/Shared/CustomButton';
import LongFrameCard from '../components/Shared/LongFrameCard';
import Header from '../components/Shared/Header';

const Secret = () => {
  const [currentPerson, setCurrentPerson] = useState(PERSONS[0]);
  const [fadeOut, setFadeOut] = useState(false);
  const [darkOverlay, setDarkOverlay] = useState(false);
  const [cardPosition, setCardPosition] = useState('0px');
  const [isCardVisible, setIsCardVisible] = useState(true);

  const prevIndexRef = useRef(0);
  const startTouchY = useRef(0); // Начальная точка касания
  const cardWrapperRef = useRef(null); // Ссылка на карточку
  const maxTopPositionRef = useRef(0); // Динамическая верхняя граница

  useEffect(() => {
    const screenHeight = window.innerHeight;
    setCardPosition(`${screenHeight}px`); // Устанавливаем начальное положение карточки

    // Рассчитываем верхнюю границу для текущей карточки
    if (cardWrapperRef.current) {
      const cardHeight = cardWrapperRef.current.offsetHeight;
      maxTopPositionRef.current = screenHeight - cardHeight; // Верхняя граница = экран - высота карточки
    }
  }, [currentPerson]); // Пересчитываем при смене карточки

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

  const handleLearnMoreClick = () => {
    setDarkOverlay(true);
    const screenHeight = window.innerHeight;
    setCardPosition(`${screenHeight / 2}px`);
  };

  const handleTouchStart = (e) => {
    const touchStartY = e.touches[0].clientY;
    startTouchY.current = touchStartY;
  };

  const handleTouchMove = (e) => {
    const touchMoveY = e.touches[0].clientY;
    const touchDeltaY = touchMoveY - startTouchY.current;

    setCardPosition((prevPosition) => {
      const currentPosition = parseFloat(prevPosition.replace('px', ''));
      const screenHeight = window.innerHeight;
      const maxTopPosition = maxTopPositionRef.current; // Используем динамическую верхнюю границу
      const minTopPosition = screenHeight; // Нижняя граница (скрытая позиция)

      // Рассчитываем новую позицию
      let newPosition = currentPosition + touchDeltaY;

      // Ограничиваем новую позицию
      if (newPosition < maxTopPosition) {
        newPosition = maxTopPosition; // Если выше допустимого, фиксируем
      } else if (newPosition > minTopPosition) {
        newPosition = minTopPosition; // Если ниже допустимого, фиксируем
      }

      return `${newPosition}px`;
    });

    startTouchY.current = touchMoveY; // Обновляем начальную позицию
  };

  const handleTouchEnd = () => {
    const screenHeight = window.innerHeight;
    const cardTopPosition = parseFloat(cardPosition);

    // Если карточка опущена ниже половины экрана, скрываем её
    if (cardTopPosition > screenHeight / 2) {
      setCardPosition(`${screenHeight}px`); // Скрыть карточку
      setDarkOverlay(false); // Скрыть оверлей
    } else {
      setIsCardVisible(true); // Оставить карточку видимой
    }
  };


  return (
    <SecretRoomWr>
      <Header />
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
          className="mySwiper"
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
          <SwiperPagination className="swiper-pagination" />
        </SwiperPaginationWrapper>

        <SwiperText $fadeOut={fadeOut}>
          <H3>{currentPerson?.name}</H3>
          <P2>{currentPerson?.info}</P2>
        </SwiperText>
        <MainBtn onClick={handleLearnMoreClick}>
          <CustomButton type={'sand'}>узнать больше</CustomButton>
        </MainBtn>
      </BottomContainer>

      <DarkOverlay style={{ opacity: darkOverlay ? 0.5 : 0 }} />

      {isCardVisible && (
        <CardWrapper
          ref={cardWrapperRef}
          style={{ top: cardPosition }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <LongFrameCard>
            <StoryWr>
              <H1Styled>{currentPerson?.name.split(' ')[0]}</H1Styled>
              <P2>{currentPerson?.story}</P2>
            </StoryWr>
          </LongFrameCard>
        </CardWrapper>
      )}
    </SecretRoomWr>
  );
};

export default Secret;





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

const SwiperContainer = styled.div`
  position: absolute;
  bottom: 77vw;
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

const MainBtn = styled.div`
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
`;

const H1Styled = styled(H1)`
  text-transform: uppercase;
`;

const DarkOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100svh;
  background-color: black;
  transition: opacity 0.3s ease-in-out;
  z-index: 99;
  pointer-events: none;
`;

const CardWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: 100%;
  transform: translateX(-50%);
  z-index: 99;
  transition: top 0.3s ease-in-out;
`;
