import React, { useState } from 'react';
import styled from 'styled-components';
import CustomButton from '../components/Shared/CustomButton';
import { COLORS } from '../styles/variables';
import { Link } from 'react-router-dom';

const Tutorial = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(-1);

  const handleNext = () => {
    if (currentIndex < data.length - 1) {
      setCurrentIndex(currentIndex + 1);
      console.log('button');
    }
  };

  return (
    <TutorialWr>
      <TutorialContainer>
        {currentIndex === -1 ? <div>Привет</div> : data[currentIndex].content}
      </TutorialContainer>
      <TutorialNav>
        {currentIndex === data.length - 1 ? (
          <FullWidthLink to='/museum'>
            <CustomButton type={'sand'}>
              завершить
            </CustomButton>
          </FullWidthLink>
        ) : (
          <>
            <MapLink to='/map'>
              <CustomButton type={'orange'}>
                пропустить
              </CustomButton>
            </MapLink>
            <CustomButton type={'sand'} onClick={handleNext}>
              далее
            </CustomButton>
          </>
        )}
      </TutorialNav>
    </TutorialWr>
  );
};

const TutorialWr = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100svh;
  background-color: ${COLORS.green};

  padding: 3vw;
`;

const TutorialContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const TutorialNav = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 3vw;

  & > *:only-child {
    flex: 1;
  }
`;

const MapLink = styled(Link)``;

const FullWidthLink = styled(Link)`
  flex: 1;
`;

export default Tutorial;