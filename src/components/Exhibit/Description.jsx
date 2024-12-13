import React from 'react';
import { styled } from 'styled-components';
import {ButtonTextStyle,P1} from '../../styles/textTags';
import { COLORS } from '../../styles/variables';

const Description = ({ data }) => {
  if (!data?.description) return null; // Проверяем наличие data и description

  // Берём наибольшую длину из текстов и изображений
  const maxLength = Math.max(
    data.description.text?.length || 0,
    data.description.imgs?.length || 0
  );

  // Создаём массив из текстов и изображений
  const combinedArray = Array.from({ length: maxLength }, (_, index) => ({
    text: data.description.text?.[index] || null,
    img: data.description.imgs?.[index] || null,
  }));

  return (
    <DescriptionWr>
      <Title>{data?.name}</Title>
      {combinedArray.map((item, index) => (
        <div key={index}>
          {item.text && <P1>{item.text}</P1>}
          {item.img && <img src={item.img} alt={data?.name} />}
        </div>
      ))}
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
