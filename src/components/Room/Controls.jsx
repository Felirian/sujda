import React from 'react';
import { styled } from 'styled-components';
import { COLORS } from '../../styles/variables';
import { useNavigate, useLocation } from 'react-router-dom';
import { ROOMS_DATA } from '../../features/data';
import { ButtonTextStyle } from '../../styles/textTags';
import CustomButton from '../Shared/CustomButton';

const Controls = ({ background = false }) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <ControlsWr $background={background}>
      <ButtonPanelContainer>
        <CustomButton
          link={'/room/first'}
          text={'Зал 1'}
          currentPath={location.pathname}
          style={location.pathname === '/room/first' ? { color: COLORS.red } : {}}
        />
        <CustomButton
          link={'/room/second'}
          text={'Зал 2'}
          currentPath={location.pathname}
          style={location.pathname === '/room/second' ? { color: COLORS.red } : {}}
        />
        <CustomButton
          link={'/room/third'}
          text={'Зал 3'}
          currentPath={location.pathname}
          style={location.pathname === '/room/third' ? { color: COLORS.red } : {}}
        />
      </ButtonPanelContainer>

      <CustomButton link={'/room/secret'} text={'Секретна комната'} size={'large'} />
    </ControlsWr>
  );
};

const ControlsWr = styled.div`
  background-color: ${(props) => (props.$background ? COLORS.green : 'rgba(0,0,0,0)')};
  padding: ${(props) => (props.$background ? '6.15vw 5.13vw 7.18vw' : '0')};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.564vw;
  width: 100%;
  padding: 6.15vw 5.13vw 7.18vw;
`;

const ButtonPanelContainer = styled.div`
  width: 100%;
  display: flex;
`;

export default Controls;