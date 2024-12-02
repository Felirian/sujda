import React, { useState } from 'react';
import styled from 'styled-components';
import { COLORS } from '../../../styles/variables';
import { FILTERS } from '../../../features/map';
import SvgSelector from '../../Shared/SvgSelector';
import { ButtonTextStyle, P2Style } from '../../../styles/textTags';

const Filter = ({ selected, setSelected }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleCheckboxChange = (index) => {
    const updatedSelected = selected.includes(index)
      ? selected.filter((item) => item !== index)
      : [...selected, index];
    setSelected(updatedSelected);
  };

  return (
    <DropdownWrapper>
      <DropdownTitle>Поиск</DropdownTitle>
      <DropdownButton onClick={toggleDropdown}>
        <Arrow $isopen={isOpen}>
          <SvgSelector svg='filterArrow' />
        </Arrow>
      </DropdownButton>
      <DropdownList $isopen={isOpen}>
        {FILTERS.map((option, index) => (
          <ListItem key={index}>
            <HiddenCheckbox
              type='checkbox'
              checked={selected.includes(index)}
              onChange={() => handleCheckboxChange(index)}
            />
            <CustomCheckbox $checked={selected.includes(index)}>
              {<SvgSelector svg='filterCheckbox' />}
            </CustomCheckbox>
            {option}
          </ListItem>
        ))}
      </DropdownList>
    </DropdownWrapper>
  );
};

const DropdownWrapper = styled.div`
  position: relative;
  width: 72.82vw;
`;

const DropdownButton = styled.button`
  position: relative;
  height: 11.28vw;
  width: 100%;
  padding: 2.05vw 4.1vw;
  background-color: ${COLORS.white};
  cursor: pointer;
  text-align: left;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 3.08vw;
  z-index: 5;
`;

const DropdownTitle = styled.div`
  ${ButtonTextStyle};
  position: absolute;
  color: ${COLORS.green};
  left: 4.1vw;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
`;

const DropdownList = styled.div`
  position: absolute;
  padding-top: 5.13vw;
  padding-bottom: 1.54vw;
  top: 70%;
  left: 0;
  width: 100%;
  background-color: ${COLORS.white};
  opacity: 0.85;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
  transform: ${({ $isopen }) => ($isopen ? 'scaleY(1)' : 'scaleY(0)')};
  transform-origin: top;
  transition: transform 0.2s ease-in-out;
  z-index: 1;
`;

const ListItem = styled.label`
  ${P2Style}
  display: flex;
  align-items: center;
  padding: 1.28vw 3.59vw;
  cursor: pointer;

  color: ${COLORS.grey};

  &:hover {
    background-color: #f0f0f0;
  }
`;

const CustomCheckbox = styled.div`
  position: relative;
  width: 4.1vw;
  height: 4.1vw;
  border: 0.3vw solid ${COLORS.green};
  border-radius: 0.77vw;
  margin-right: 3.08vw;
  flex-shrink: 0;
  svg {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(${({ $checked }) => ($checked ? '1' : '0')});
    position: absolute;
    width: 110%;
    height: 110%;
    transition: 0.1s;
    opacity: ${({ $checked }) => ($checked ? 1 : 0)};
    border-radius: 0.77vw;
  }
`;

const HiddenCheckbox = styled.input`
  display: none;
`;

const Arrow = styled.span`
  position: absolute;
  right: 4.1vw;
  display: inline-block;
  transition: transform 0.2s ease-in-out;
  transform: ${({ $isopen }) => ($isopen ? 'scale(1, -1)' : 'scale(1, 1)')};
  width: 4.62vw;
  height: 2.31vw;
  svg {
    width: 100%;
    height: 100%;
  }
`;

export default Filter;
