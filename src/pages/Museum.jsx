import React from 'react';
import Controls from "../components/Room/Controls";
import styled from "styled-components";
import Img from '../assets/rooms/secret/person3.png'

const Museum = () => {
  return (
    <>
      <Ganibal src={Img} alt={'fgdfd'}/>
      <Controls />
    </>
  );
};

const Ganibal = styled.img`
  width: 100%;
`

export default Museum;