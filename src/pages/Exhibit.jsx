import React from 'react';
import { styled } from 'styled-components';

const Exhibit = ({ data }) => {
  return <ExhibitWr>{data.name}</ExhibitWr>;
};

const ExhibitWr = styled.div``;

export default Exhibit;
