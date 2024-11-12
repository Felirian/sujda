import React from 'react';
import { styled } from 'styled-components';
import { COLORS } from '../../styles/variables';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { ROOMS_DATA } from '../../features/data';
import { ButtonTextStyle } from '../../styles/textTags';
import Button from '../Shared/Button';

const Controls = ({ background = false }) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <ControlsWr background={background}>
      <HallsBlockWr>
        <HallsBlock>
          {ROOMS_DATA.map((room, index) => (
            <React.Fragment key={room.route}>
              <Hall
                active={location.pathname.includes(room.route)}
                onClick={() => navigate(`/room/${room.route}`)}
              >
                {room.name}
              </Hall>
              {index < ROOMS_DATA.length - 1 && <VerticalLine />}
            </React.Fragment>
          ))}
        </HallsBlock>
      </HallsBlockWr>
      <SecretRoomBtn to={'/room/secret'}>
        <Button type={'sand'}>секретная комната</Button>
      </SecretRoomBtn>
    </ControlsWr>
  );
};

const ControlsWr = styled.div`

  background-color: ${props => props.background ? COLORS.green : 'rgba(0,0,0,0)'};
  // padding: 6.15vw 5.13vw 7.18vw;
  display: flex;
  flex-direction: column;
  gap: 1.67vw;
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

const SecretRoomBtn = styled(Link)`
  padding: 0.77vw;
  background-color: ${COLORS.sand};
`;

const SecretRoom = styled.div`
  ${ButtonTextStyle};
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0.3vw solid ${COLORS.grey};
  background-color: ${COLORS.sand};
  height: 10.26vw;
`;

const Hall = styled.span`
  ${ButtonTextStyle}

  color: ${({ active }) => active && COLORS.red};
  cursor: pointer;
  padding: 0 1vw;
`;

const VerticalLine = styled.div`
  width: 0.2vw;
  height: 50%;
  background-color: ${COLORS.grey};
`;

export default Controls;