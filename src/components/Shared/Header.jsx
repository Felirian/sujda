import React from 'react';
import styled from 'styled-components';
import SvgSelector from './SvgSelector';
import { COLORS } from '../../styles/variables';
import { Link } from 'react-router-dom';

const Header = ({ to, type }) => (
  <HeaderWr>
    {to && (
      <HeaderArrow to={to} type={type}>
        {type === 'black' ? (
          <SvgSelector svg={'headerArrowBlack'} />
        ) : (
          <SvgSelector svg={'headerArrowWhite'} />
        )}
      </HeaderArrow>
    )}
    <HeaderMenu type={type}>
      {type === 'black' ? <SvgSelector svg={'headerBlack'} /> : <SvgSelector svg={'headerWhite'} />}
    </HeaderMenu>
  </HeaderWr>
);

const HeaderWr = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-between;
  top: 0;
  padding: 6.6vw;
  z-index: 99;
  width: 100%;
`;

const HeaderMenu = styled.header`
  width: 9.2vw;
  height: 9.2vw;
  padding: 3vw;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  border: ${({ type }) => `0.3vw solid ${type === 'black' ? COLORS.black : COLORS.white}`};
`;

const HeaderArrow = styled(Link)`
  width: 8vw;
  height: 9.2vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Header;
