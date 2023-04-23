import styled from 'styled-components';

export const FilterContainer = styled.div`
  display: flex;
  align-items: center;
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
