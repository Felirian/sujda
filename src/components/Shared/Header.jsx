import React from 'react';
import styled from 'styled-components';
import SvgSelector from './SvgSelector';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Header = ({ type, back, map }) => {
  const location = useLocation();
  const navigate = useNavigate();

  // Функция для получения пути на уровень выше
  const getParentPath = () => {
    const pathParts = location.pathname.split('/').filter(Boolean);
    return pathParts.length > 1 ? `/${pathParts.slice(0, -1).join('/')}` : '/';
  };

  const parentPath = getParentPath();

  return (
    <HeaderWr>
      {back && (
        <HeaderArrow
          to={parentPath}
          type={type}
          onClick={(e) => {
            e.preventDefault();
            navigate(parentPath);
          }}
        >
          <SvgSelector svg={type === 'black' ? 'headerArrowBlack' : 'headerArrowWhite'} />
        </HeaderArrow>
      )}
      {map && (
        <HeaderArrow
          to={'/map'}
          type={type}
          onClick={(e) => {
            e.preventDefault();
            navigate('/map');
          }}
        >
          <SvgSelector svg={type === 'black' ? 'headerMapBlack' : 'headerMapWhite'} />
        </HeaderArrow>
      )}
      <HeaderMenu to={'/museum'} type={type}>
        <SvgSelector svg={type === 'black' ? 'headerBlack' : 'headerWhite'} />
      </HeaderMenu>
    </HeaderWr>
  );
};

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

const HeaderMenu = styled(Link)`
  width: 9.2vw;
  height: 9.2vw;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
`;

const HeaderArrow = styled(Link)`
  width: 8vw;
  height: 9.2vw;
  display: flex;
  align-items: center;
  justify-content: center;
 z-index: 999;
  svg {
    z-index: 999;
  }
`;

export default Header;
