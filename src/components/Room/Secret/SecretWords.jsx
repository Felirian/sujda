import React from 'react';
import styled, { css } from 'styled-components';
import { COLORS } from '../../../styles/variables';
import { H3 } from '../../../styles/textTags';
import SvgSelector from '../../Shared/SvgSelector';

const SecretWords = ({ open }) => {
  const secretWords = {
    first: localStorage.getItem('first') === 'true',
    second: localStorage.getItem('second') === 'true',
    third: localStorage.getItem('third') === 'true',
  };

  return (
    <SecretWordsBlock>
      {secretWords.first && (
        <SecretWord1>
          <H3Styled>Пушкин</H3Styled>
          <SvgSelector svg='arrowBgS' />
        </SecretWord1>
      )}
      {secretWords.second && (
        <SecretWord2>
          <H3Styled>Ганнибал</H3Styled>
          <SvgSelector svg='arrowBgM' />
        </SecretWord2>
      )}
      {secretWords.third && (
        <SecretWord3>
          <H3Styled>Суйда</H3Styled>
          <SvgSelector svg='arrowBgL' />
        </SecretWord3>
      )}
    </SecretWordsBlock>
  );
};

const SecretWordsBlock = styled.div`
  position: absolute;
  left: 0.1vw;
  top: 8.21vw;
  z-index: 20;

  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 2.05vw;
`;

const SecretWordStyle = css`
  position: relative;

  display: flex;
  align-items: center;

  color: ${COLORS.white};
  height: 9.49vw;
  padding-left: 5vw;

  svg {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 3;
    width: 100%;
    height: 100%;
  }
`;

const SecretWord1 = styled.div`
  ${SecretWordStyle};
  width: 37.18vw;
`;
const SecretWord2 = styled.div`
  ${SecretWordStyle};
  width: 41.54vw;
`;
const SecretWord3 = styled.div`
  ${SecretWordStyle};
  width: 44.62vw;
`;

const H3Styled = styled(H3)`
  color: ${COLORS.white};
  text-transform: uppercase;
  font-weight: 600;
  white-space: nowrap;
  font-size: 4.1vw;
  z-index: 5;

  text-align: start;
`;

export default SecretWords;
