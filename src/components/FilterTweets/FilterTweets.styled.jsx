import styled from 'styled-components';
import { BsArrowDownSquareFill } from 'react-icons/bs';

export const FilterIcon = styled(BsArrowDownSquareFill)`
  transform: rotate(180deg);

  transition: transform 250ms ease;
  :hover,
  :focus {
    transform: rotate(0deg);
  }
`;

export const DropDownBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
`;

export const DropDownBtn = styled.button`
  color: #ffffff;
  text-align: center;
  background-color: transparent;
`;

export const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  transition: transform 500ms linear;
  transform: ${({ isShow }) => (isShow ? 'scale(1)' : 'scale(0)')};
  gap: 5px;
`;

export const FilterButton = styled.button`
  padding: 8px 12px;
  border-radius: 4px;
  border: none;
  font: inherit;
  cursor: pointer;

  transition: all 300ms ease;
  background-color: ${({ selected }) => (selected ? '#1976d2' : '#e2e5e8')};
  color: ${({ selected }) => (selected ? '#ffffff' : 'inherit')};
`;
