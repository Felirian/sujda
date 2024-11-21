import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';

const PopUpScroller = ({ children, popUp, onClose }) => {
  const [isCardVisible, setIsCardVisible] = useState(popUp);
  const [darkOverlay, setDarkOverlay] = useState(popUp);
  const [down, setDown] = useState(false);

  const touchStartY = useRef(0);
  const touchEndY = useRef(0);
  const cardWrapperRef = useRef(null);
  const cardContainerRef = useRef(null);

  useEffect(() => {
    setIsCardVisible(popUp);
    setDarkOverlay(popUp);
    setDown(false);
  }, [popUp]);

  const handleTouchStart = (e) => {
    touchStartY.current = e.touches[0].clientY;
    setDown(false);
  };

  const handleTouchEnd = (e) => {
    touchEndY.current = e.changedTouches[0].clientY;
    if (touchEndY.current - touchStartY.current > 50) {
      setDown(true);
    }
  };

  const handleTouchMove = (e) => {
    const currentY = e.touches[0].clientY;
    const cardContainerRect = cardContainerRef.current.getBoundingClientRect();

    if (currentY > touchStartY.current && cardContainerRect.top > window.innerHeight / 2) {
      setIsCardVisible(false);
      setDarkOverlay(false);
      onClose();
    }
  };
  useEffect(() => {
    const handleScroll = () => {
      if (cardContainerRef.current) {
        const cardContainerRect = cardContainerRef.current.getBoundingClientRect();
        if (cardContainerRect.top > window.innerHeight / 2 && down) {
          setIsCardVisible(false);
          setDarkOverlay(false);
          onClose();
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [down, onClose]);

  return (
    <CardWrapper
      ref={cardWrapperRef}
      isVisible={isCardVisible}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
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
  padding-top: ${(props) => (props.isVisible ? '60svh' : '150svh')};
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
