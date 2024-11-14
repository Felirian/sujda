import React from 'react';
import { styled } from 'styled-components';
import SvgSelector from '../Shared/SvgSelector';
import { Link } from 'react-router-dom';

const Preview = ({ data }) => {
  return (
    <PreviewWr>
      <img src={data.img} alt={data.name} />
      <Link to='model'>
        <SvgSelector svg='3d' />
      </Link>
    </PreviewWr>
  );
};

const PreviewWr = styled.div`
  width: 100%;
  padding: 15.38vw;
  position: relative;
  img {
    width: 100%;
  }
  a {
    position: absolute;
    bottom: 12.82vw;
    right: 12.82vw;
    width: 11.54vw;
    height: 11.54vw;
    svg {
      width: 100%;
      height: 100%;
    }
    &:active {
      opacity: 0.8;
    }
  }
`;

export default Preview;
