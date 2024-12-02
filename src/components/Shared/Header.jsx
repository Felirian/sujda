import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import arrow from '../../assets/header/arrow.png';
import logo from '../../assets/header/logo.png';
import maps from '../../assets/header/map.png';
import word from '../../assets/header/word.png';
import { H3Style } from '../../styles/textTags';
import { COLORS } from '../../styles/variables';

const Header = ({ home, back, map, words }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const getParentPath = () => {
    const pathParts = location.pathname.split('/').filter(Boolean);
    return pathParts.length > 1 ? `/${pathParts.slice(0, -1).join('/')}` : '/';
  };

  const parentPath = getParentPath();

  const [wordsOpen, setWordsOpen] = useState(false);

  useEffect(() => {
    const first = localStorage.getItem('first') === 'true';
    const second = localStorage.getItem('second') === 'true';
    const third = localStorage.getItem('third') === 'true';

    const trueCount = [first, second, third].filter(Boolean).length;

    setWordsOpen(trueCount);
  }, []);

  return (
    <HeaderWr>
      {back && (
        <HeaderBtn
          to={parentPath}
          onClick={(e) => {
            e.preventDefault();
            navigate(parentPath);
          }}
        >
          <img src={arrow} alt='Arrow' />
        </HeaderBtn>
      )}
      {map && (
        <HeaderBtn
          to={'/map'}
          onClick={(e) => {
            e.preventDefault();
            navigate('/map');
          }}
        >
          <img src={maps} alt='Map' />
        </HeaderBtn>
      )}

      {words && (
        <HeaderBtn>
          <img src={word} alt='Word' />
          <WordsOpenCount>{wordsOpen}</WordsOpenCount>
        </HeaderBtn>
      )}
      {home && (
        <HeaderBtn to={'/museum'}>
          <img src={logo} alt='Logo' />
        </HeaderBtn>
      )}
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
  width: 100%;
`;

const HeaderBtn = styled(Link)`
  position: relative;
  width: 8vw;
  height: 9.2vw;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  width: 12.821vw;
  height: 12.821vw;
  background-color: #6c2929;
  border-radius: 1.795vw;
  img {
    width: 100%;
    height: 100%;
  }
`;

const WordsOpenCount = styled.div`
  ${H3Style};
  color: ${COLORS.green};
  font-size: 5.13vw;
  position: absolute;
  left: 4.7vw;
  top: 3.2vw;
`;

export default Header;
