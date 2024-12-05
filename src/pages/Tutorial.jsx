import React, {useState} from 'react';
import styled from 'styled-components';
import CustomButton from '../components/Shared/CustomButton';
import {COLORS} from '../styles/variables';
import {Link} from 'react-router-dom';
import Page from "../components/Tutorial/Page";
import {H1, H3} from "../styles/textTags";
import SvgSelector from "../components/Shared/SvgSelector";

const Tutorial = ({data}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex(currentIndex + 1);
  };

  return (
    <TutorialWr $data={data[currentIndex]}>
      <LogoCon>
        <SvgSelector svg={`elephantLogo-${currentIndex % 2 === 0 ? 'yellow' : 'green'}`}/>
      </LogoCon>


      <Page data={data[currentIndex]}/>

      <TutorialNav>
        <DotsCon>
          {data.map((item, index) => (
            <Dot key={index} style={{
              backgroundColor: currentIndex === index
                ? COLORS.red
                : data[currentIndex].backgroundColor === '#333E2C'
                  ? COLORS.sand
                  : COLORS.green
            }}/>
          ))}
        </DotsCon>
        {currentIndex >= data.length - 1 ? (

          <CustomButton link={'/museum'} text={'Продолжить'} size={'medium'}/>

        ) : (
          <BtnBlock>
            <CustomButton text={'Далее'} size={'medium'} onClick={handleNext}
                          color={currentIndex % 2 === 0 ? 'sand' : 'darkGreen'}/>
            <Link to='/museum'>
              <H3>пропустить</H3>
            </Link>
          </BtnBlock>
        )}
      </TutorialNav>
    </TutorialWr>
  );
};

const TutorialWr = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100svh;

  background-image: url(${(props) => props.$data.backgroundImg});
  background-size: cover;

  background-color: ${(props) => props.$data.backgroundColor};

  h1, h3 {
    color: ${(props) =>
      props.$data.backgroundColor === '#333E2C'
        ? '#BDBC8E'
        : '#333E2C'
    };
  }

  p {
    color: ${(props) =>
      props.$data.backgroundColor === '#333E2C'
        ? '#FFFFFF'
        : '#333E2C'
    };
  }

  padding: 5vw 3vw;
`;
const BtnBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6.41vw;
  align-items: center;
`

const LogoCon = styled.div`
  svg {
    width: 21.79vw;
    height: 22.05vw;
  }

`

const DotsCon = styled.div`
  display: flex;
  gap: 1.54vw;
`

const Dot = styled.div`
  width: 2.56vw;
  height: 2.56vw;
`

const TutorialNav = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 6.41vw;

  & > *:only-child {
    flex: 1;
  }
`;


export default Tutorial;