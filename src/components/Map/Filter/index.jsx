import React, { useState } from 'react';
import styled from 'styled-components';
import { COLORS } from '../../../styles/variables';
import { FILTERS } from '../../../features/map';
import SvgSelector from '../../Shared/SvgSelector';
import { ButtonTextStyle } from '../../../styles/textTags';

const Filter = ({ selected, setSelected }) => {
  const [isOpen, setIsOpen] = useState(false);

  console.log('rerererre');

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
            <CustomCheckbox $checked={selected.includes(index)} />
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
`;

const DropdownTitle = styled.div`
  ${ButtonTextStyle};
  position: absolute;
  color: ${COLORS.green};
  left: 4.1vw;
  top: 50%;
  transform: translateY(-50%);
`;

const DropdownList = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  border: 1px solid #ccc;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-height: 200px;
  overflow-y: auto;
  transform: ${({ $isopen }) => ($isopen ? 'scaleY(1)' : 'scaleY(0)')};
  transform-origin: top;
  transition: transform 0.2s ease-in-out;
  z-index: 10;
`;

const ListItem = styled.label`
  display: flex;
  align-items: center;
  padding: 8px 10px;
  cursor: pointer;

  color: ${COLORS.darkOrange};

  &:hover {
    background-color: #f0f0f0;
  }
`;

const CustomCheckbox = styled.div`
  width: 16px;
  height: 16px;
  border: 2px solid ${({ $checked }) => ($checked ? '#007bff' : '#ccc')};
  background-color: ${({ $checked }) => ($checked ? '#007bff' : '#fff')};
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;

  &:after {
    content: '';
    width: 8px;
    height: 8px;
    background-color: #fff;
    display: ${({ $checked }) => ($checked ? 'block' : 'none')};
    border-radius: 2px;
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
