import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import CancelButton from './CancelButton';

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

  const handleClose = () => {
    setIsCardVisible(false);
    setDarkOverlay(false);
    onClose();
  };

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

    if (currentY > touchStartY.current && cardContainerRect.top > window.innerHeight / 6) {
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
      <CardCancel>
        <CancelButton onClick={handleClose} />
      </CardCancel>
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
  padding-top: ${(props) => (props.isVisible ? '15svh' : '150svh')};
  transition: padding-top 0.3s ease-in-out;
  pointer-events: ${(props) => (props.isVisible ? 'all' : 'none')};
  justify-content: flex-end;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const CardCancel = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  z-index: 999;
  position: relative;
  padding: 0 3vw 0 0;
`;

const CardContainer = styled.div`
  display: flex;
  z-index: 99999;
`;
