import React, { useState } from 'react';
import Controls from '../components/Room/Controls';
import styled from 'styled-components';
import Img from '../assets/museum/museum-person.png';
import SvgSelector from '../components/Shared/SvgSelector';
import Bg from '../assets/museum/bg.png';
import papirus from '../assets/museum/papirus.png';
import Header from '../components/Shared/Header';
import SecretWords from '../components/Room/Secret/SecretWords';
import { COLORS } from '../styles/variables';
import { H3 } from '../styles/textTags';

const Museum = () => {
  const [wordsOpen, setWordsOpen] = useState(false);

  const handleModalChoice = (choice) => {
    setWordsOpen(true);
  };

  return (
    <MuseumWr>
      <Header map words handleModalChoice={handleModalChoice} />
      <SecretWords open={wordsOpen} handleModalChoice={handleModalChoice} />
      <TopSection>
        <SvgSelector svg={'elephantLogo'} />
      </TopSection>
      <ControlsWr>
        <Ganibal src={Img} alt={'fgdfd'} />
        <Gradient>
          <StyledH3>Абрам Петрович Ганнибал</StyledH3>
        </Gradient>
        <Controls background />
      </ControlsWr>
    </MuseumWr>
  );
};

const MuseumWr = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-image: ${`url(${Bg})`};
  background-size: cover;
  height: 100svh;
  margin: 0 auto;
`;

const TopSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 77vw;
  gap: 4vw;
`;

const Ganibal = styled.img`
  width: 85%;
  height: auto;
  margin: 0 auto -10vw auto;
  display: block;
  z-index: 1;
  position: relative;
`;

const ControlsWr = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: auto;
  position: relative;
`;

const Gradient = styled.div`
  width: 100%;
  height: 23vw;
  margin-bottom: -0.3vw;
  background: linear-gradient(to top, ${COLORS.green}, transparent);
  background: -webkit-linear-gradient(bottom, ${COLORS.green}, transparent);
  background: -moz-linear-gradient(bottom, ${COLORS.green}, transparent);
  background: -o-linear-gradient(bottom, ${COLORS.green}, transparent);
  background: -ms-linear-gradient(bottom, ${COLORS.green}, transparent);
  position: relative;
  z-index: 2;
  text-align: center;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${papirus});
    background-size: cover;
    background-position: center;
    z-index: 3;
  }
`;

const StyledH3 = styled(H3)`
  position: absolute;
  width: 100%;
  text-align: center;
  text-transform: capitalize;
  font-size: 7.179vw;
  top: 40%;
  left: 0%;
  color: ${COLORS.green};
  z-index: 4;
`;

export default Museum;
