import React, { useState } from 'react';
import styled from 'styled-components';
import { COLORS } from '../../../styles/variables';
import {FILTERS} from "../../../features/map";

const Filter = ({selected, setSelected}) => {
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
      <DropdownButton onClick={toggleDropdown}>
        Выбрать <Arrow $isopen={isOpen}>▼</Arrow>
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

  width: 89.74vw;
`;

const DropdownButton = styled.button`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  background-color: #fff;
  cursor: pointer;
  text-align: left;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;

  &:focus {
    outline: none;
    border-color: #007bff;
  }
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
  display: inline-block;
  transition: transform 0.2s ease-in-out;
  transform: ${({ $isopen }) => ($isopen ? 'rotate(180deg)' : 'rotate(0deg)')};
  color: ${COLORS.orange};
`;

export default Filter;
