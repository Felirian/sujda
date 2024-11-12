import React from 'react';
import { styled } from 'styled-components';
import SvgSelector from '../Shared/SvgSelector';

const Model = ({ data }) => {
  return (
    <ModelWr>
      <img src={data.img} alt={data.name} />
      <button>
        <SvgSelector svg='3d' />
      </button>
    </ModelWr>
  );
};

const ModelWr = styled.div`
  width: 100%;
  padding: 15.38vw;
  position: relative;
  img {
    width: 100%;
  }
  button {
    position: absolute;
    bottom: 12.82vw;
    right: 12.82vw;
    width: 11.54vw;
    height: 11.54vw;
    svg {
      width: 100%;
      height: 100%;
    }
  }
`;

export default Model;
