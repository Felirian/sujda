import React from 'react';
import {H1, P1} from "../../styles/textTags";
import styled from "styled-components";
import SvgSelector from "../Shared/SvgSelector";

const Page = ({data}) => {
  return (
    <PageWr>
      <ImgWr>
        <SvgSelector svg={'tutor'} />
        <img src={data.img} alt={data.name} />
      </ImgWr>
      <TextWr>
        <H1>{data.name}</H1>
        <P1>{data.text}</P1>
      </TextWr>
    </PageWr>
  );
};

const PageWr = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8.21vw;
  
`;

const TextWr = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.03vw;
`

const ImgWr = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 42.05vw;
  height: 48.97vw;
  svg {
    width: 100%;
    height: 100%;
  }
  img {
    width: 100%;
    height: auto;
    padding: 7.18vw;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`

export default Page;