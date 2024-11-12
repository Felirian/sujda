import React from 'react';
import { styled } from 'styled-components';
import Model from '../components/Exhibit/Model';
import Description from '../components/Exhibit/Description';

const Exhibit = ({ data }) => {
  return (
    <ExhibitWr>
      <Model data={data} />
      <Description data={data} />
    </ExhibitWr>
  );
};

const ExhibitWr = styled.div``;

export default Exhibit;
