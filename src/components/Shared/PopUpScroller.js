import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';

const PopUpScroller = ({ children, popUp, onClose }) => {
  const [darkOverlay, setDarkOverlay] = useState(false);
  const [isCardVisible, setIsCardVisible] = useState(false);
  const [down, setDown] = useState(false);

  const touchStartY = useRef(0);
  const touchEndY = useRef(0);
  const cardWrapperRef = useRef(null);
  const cardContainerRef = useRef(null);

  useEffect(() => {
    const wrapper = document.querySelector('#root');
    if (wrapper) {
      wrapper.addEventListener('touchstart', handleTouchStart);
      wrapper.addEventListener('touchend', handleTouchEnd);
      wrapper.addEventListener('touchmove', handleTouchMove);
    }

    return () => {
      if (wrapper) {
        wrapper.removeEventListener('touchstart', handleTouchStart);
        wrapper.removeEventListener('touchend', handleTouchEnd);
        wrapper.removeEventListener('touchmove', handleTouchMove);
      }
    };
  }, []);

  const checkCardPosition = () => {
    if (cardContainerRef.current) {
      const cardContainerRect = cardContainerRef.current.getBoundingClientRect();
      const screenMiddle = window.innerHeight / 2;

      if (cardContainerRect.top > screenMiddle && down) {
        closeCard();
      }
    }
  };

  const handleTouchStart = (e) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e) => {
    touchEndY.current = e.changedTouches[0].clientY;
    if (touchEndY.current > touchStartY.current) {
      setDown(true);
      closeCard();
    } else {
      setDown(false);
    }
  };

  const handleTouchMove = (e) => {
    const currentY = e.touches[0].clientY;
    setDown(currentY > touchStartY.current);
  };

  const openCard = () => {
    setIsCardVisible(true);
    setDarkOverlay(true);
  };

  const closeCard = () => {
    setIsCardVisible(false);
    setDarkOverlay(false);
    if (onClose) {
      onClose();
    }
  };

  useEffect(() => {
    if (popUp) {
      openCard();
    } else if (!popUp && isCardVisible) {
      closeCard();
    }
  }, [popUp]);

  return (
    <CardWrapper ref={cardWrapperRef} onScroll={checkCardPosition} isVisible={isCardVisible}>
      <DarkOverlay style={{ opacity: darkOverlay ? 0.5 : 0 }} />
      <CardContainer ref={cardContainerRef}>{children}</CardContainer>
    </CardWrapper>
  );
};

export default PopUpScroller;


const DarkOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100svh;
  background-color: black;
  transition: opacity 0.3s ease-in-out;
  z-index: 0;
  pointer-events: none;
`;

const CardWrapper = styled.div`
  position: absolute;
  top: 1px;
  height: 100svh;
  width: 100%;
  z-index: 99; 
  overflow-y: scroll;
  max-height: 100vh;
  padding-top: ${(props) => (props.isVisible ? '70svh' : '150svh')};
  transition: padding-top 0.3s ease-in-out;
  pointer-events: ${(props) => (props.isVisible ? 'all' : 'none')};
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const CardContainer = styled.div`
  display: flex;
  padding-top: 0svh;
  z-index: 99999;
`;