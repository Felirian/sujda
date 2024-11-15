import React from 'react';
import { styled } from 'styled-components';
import Preview from '../components/Exhibit/Preview';
import Description from '../components/Exhibit/Description';
import SvgSelector from '../components/Shared/SvgSelector';

const Exhibit = ({ data }) => {
  return (
    <ExhibitWr>
      <Preview data={data} />
      <DescriptionBlock>
        <SvgSelector svg='topLongFrameGreen' />
        <Description data={data} />
      </DescriptionBlock>
    </ExhibitWr>
  );
};

const ExhibitWr = styled.div`
  position: relative;
`;

const DescriptionBlock = styled.div`
  display: flex;
  flex-direction: column;
  svg {
    width: 100vw;
    height: 16.92vw;
    margin-bottom: -1px;
  }
`;

export default Exhibit;
