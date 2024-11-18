import React from 'react';
import styled from 'styled-components';
import SvgSelector from './SvgSelector';
import { COLORS } from '../../styles/variables';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Header = ({ type, back }) => {
  const location = useLocation();
  const navigate = useNavigate();

  // Функция для получения пути на уровень выше
  const getParentPath = () => {
    const pathParts = location.pathname.split('/').filter(Boolean);
    if (pathParts.length > 1) {
      return `/${pathParts.slice(0, -1).join('/')}`;
    }
    return '/'; // Если путь состоит из одного уровня, возвращаем корневой путь
  };

  const parentPath = getParentPath();

  return (
    <HeaderWr>
      {back && ( // Отображаем стрелку только если передан параметр `back`
        <HeaderArrow
          to={parentPath}
          type={type}
          onClick={(e) => {
            e.preventDefault(); // Предотвращаем стандартное поведение ссылки
            navigate(parentPath); // Переход на уровень выше
          }}
        >
          {type === 'black' ? (
            <SvgSelector svg={'headerArrowBlack'} />
          ) : (
            <SvgSelector svg={'headerArrowWhite'} />
          )}
        </HeaderArrow>
      )}
      <HeaderMenu to={'/museum'} type={type}>
        {type === 'black' ? <SvgSelector svg={'headerBlack'} /> : <SvgSelector svg={'headerWhite'} />}
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
