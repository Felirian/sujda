import React, {useState} from 'react';
import Controls from '../components/Room/Controls';
import styled from 'styled-components';
import Img from '../assets/museum/museum-person.png';
import SvgSelector from '../components/Shared/SvgSelector';
import ArrowButton from '../components/Shared/ArrowButton';
import { Link } from 'react-router-dom';
import Bg from '../assets/museum/bg.png';
import Header from '../components/Shared/Header';
import SecretWords from "../components/Room/Secret/SecretWords";

const Museum = () => {
  const [wordsOpen, setWordsOpen] = useState(false)

  return (
    <MuseumWr>
      <Header map words />
      <SecretWords />
      <TopSection>
        <SvgSelector svg={'elephantLogo'} />
      </TopSection>
      <ControlsWr>
        <Ganibal src={Img} alt={'fgdfd'} />
        <Controls background/>
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
  margin: 0 auto;
  display: block;
`;

const ControlsWr = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: auto;
`;

export default Museum;
