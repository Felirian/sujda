import React from 'react';
import { styled } from 'styled-components';
import Preview from '../components/Exhibit/Preview';
import Description from '../components/Exhibit/Description';

const Exhibit = ({ data }) => {
  return (
    <ExhibitWr>
      <Preview data={data} />
      <Description data={data} />
    </ExhibitWr>
  );
};

const ExhibitWr = styled.div`
  position: relative;
`;

export default Exhibit;
