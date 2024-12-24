import React from "react";
import LongFrameCard from "../Shared/LongFrameCard";
import { styled } from "styled-components";
import { H1, P2, P1, H2 } from "../../styles/textTags";
import {COLORS} from "../../styles/variables";

const ModalContent = ({ selectedPoint }) => {
  return (
    <LongFrameCard>
      {selectedPoint && (
        <ModalContentWr>
          <Title>{selectedPoint.name}</Title>
          <P2>{selectedPoint.info}</P2>
          {selectedPoint.img.map((image, index) => (
            <div key={index}>
              <ModalImg
                src={image}
                alt={`${selectedPoint.name} ${index + 1}`}
              />
              <P1>{selectedPoint?.imgdesc?.[index]}</P1>
            </div>
          ))}
        </ModalContentWr>
      )}
    </LongFrameCard>
  );
};

const ModalContentWr = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6vw;
  min-height: 60vw;
  ${P1} {
    span {
      font-style: italic;
      font-size: 4.5vw;
    }
  }
  ${H2} {
    color: ${COLORS.yellow};
    text-align: center;
  }
  
`;

const Title = styled(H1)`
  text-transform: uppercase;
  color: ${COLORS.yellow};
`;

const ModalImg = styled.img`
  width: 100%;
  margin-top: 2vw;
`;

export default ModalContent;
