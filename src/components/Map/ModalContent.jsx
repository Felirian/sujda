import React from 'react';
import LongFrameCard from '../Shared/LongFrameCard';
import { styled } from 'styled-components';
import { H1, P1 } from '../../styles/textTags';

const ModalContent = ({ selectedPoint }) => {
  return (
    <LongFrameCard>
      {selectedPoint && (
        <ModalContentWr>
          <Title>{selectedPoint.name}</Title>
          <Info>{selectedPoint.info}</Info>
          <ModalImg src={selectedPoint.img} alt={selectedPoint.name} />
        </ModalContentWr>
      )}
    </LongFrameCard>
  );
};

const ModalContentWr = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 10vw;
  padding-bottom: 10vw;
  gap: 6.15vw;
`;

const Title = styled(H1)`
  text-transform: uppercase;
`;

const Info = styled(P1)`
  text-align: start;
`;

const ModalImg = styled.img``;

export default ModalContent;
