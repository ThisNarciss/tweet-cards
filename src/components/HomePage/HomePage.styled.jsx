import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { GiExitDoor } from 'react-icons/gi';

import nightCity from '../../images/peakpx.jpg';

const textAnim = keyframes`
  0% {
    opacity: 0.1;
  }
   50% {
    opacity: 1;
  }
  100% {
    opacity: 0.1;
  }
`;

export const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  background-image: url(${nightCity});
  background-size: cover;
  background-repeat: no-repeat;
  overflow: auto;
`;

export const HomeLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  --c: #fff;
  padding: 10px;
  color: #fff;
  background: linear-gradient(90deg, #0000 33%, #fff5, #0000 67%)
      var(--_p, 100%) / 300% no-repeat,
    #004dff;
  border: none;
  transform: perspective(500px) rotateY(calc(20deg * var(--_i, -1)));

  outline-offset: 0.1em;
  transition: 0.3s;

  font-weight: bold;
  font-size: 2rem;
  margin: 0;
  cursor: pointer;
  padding: 0.1em 0.3em;

  :hover,
  :focus-visible {
    --_p: 0%;
    --_i: 1;
  }
  :active {
    text-shadow: none;
    color: var(--c);
    box-shadow: inset 0 0 9e9Q #0005;
    transition: 0s;
  }
`;

export const Span = styled.span`
  animation: ${textAnim} 1500ms cubic-bezier(1, -0.05, 0, 1.01) infinite;
`;

export const DoorIcon = styled(GiExitDoor)`
  color: #fff;

  animation: ${textAnim} 1500ms cubic-bezier(1, -0.05, 0, 1.01) infinite;
`;
