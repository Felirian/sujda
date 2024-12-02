import React from 'react';
import { styled } from 'styled-components';
import {ButtonTextStyle, H2, P1, P2} from '../../styles/textTags';
import { COLORS } from '../../styles/variables';

const Description = ({ data }) => {
  return (
    <DescriptionWr>
      <Title>{data?.name}</Title>
      <P1>{data?.description?.text[0]}</P1>
      {data.description.imgs[0] && <img src={data.description.imgs[0]} alt={data?.name} />}
      <P1>{data?.description?.text[1]}</P1>
      {data.description.imgs[1] && <img src={data.description.imgs[1]} alt={data?.name} />}
    </DescriptionWr>
  );
};

const DescriptionWr = styled.div`
  padding: 0 5.64vw 14.1vw 5.64vw;
  width: 100%;
  background-color: ${COLORS.green};
  display: flex;
  flex-direction: column;
  gap: 6.15vw;
  img {
    width: 100%;
    object-fit: contain;
  }
`;

const Title = styled.h2`
  ${ButtonTextStyle};
  text-align: center;
  color: ${COLORS.yellow};
`;

export default Description;
