import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const HomeLink = styled(Link)`
  padding: 10px;
  background-color: tomato;
  color: #ffffff;
`;
