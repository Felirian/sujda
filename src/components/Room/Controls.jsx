import React from 'react';
import { styled } from 'styled-components';
import { COLORS } from '../../styles/variables';
import { useNavigate, useLocation } from 'react-router-dom';
import { ROOMS_DATA } from '../../features/data';
import { ButtonTextStyle } from '../../styles/textTags';

const Controls = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <ControlsWr>
      <HallsBlockWr>
        <HallsBlock>
          {ROOMS_DATA.map((room) => (
            <Hall
              key={room.route}
              active={location.pathname.includes(room.route)}
              onClick={() => navigate(`/room/${room.route}`)}
            >
              {room.name}
            </Hall>
          ))}
        </HallsBlock>
      </HallsBlockWr>
    </ControlsWr>
  );
};

const ControlsWr = styled.div`
  height: 38vw;
  background-color: ${COLORS.green};
  padding: 6.15vw 5.13vw 7.18vw;
`;

const HallsBlockWr = styled.div`
  padding: 0.77vw;
  background-color: ${COLORS.sand};
`;

const HallsBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  border: 0.3vw solid ${COLORS.grey};
  background-color: ${COLORS.sand};
  height: 10.26vw;
`;

const Hall = styled.span`
  ${ButtonTextStyle}

  color: ${({ active }) => active && COLORS.red};

  cursor: pointer;
`;

export default Controls;
