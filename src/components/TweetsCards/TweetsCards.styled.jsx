import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const animateBackground = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

export const TweetsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  gap: 20px;
  margin-left: auto;
  margin-right: auto;

  min-height: 900px;
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: ${animateBackground} 15s ease infinite;
`;

export const BackLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 5px;
  text-transform: uppercase;

  background-color: #f8f800;
  padding: 20px;
  border-radius: 10px;
  @keyframes scale {
    0% {
      transform: scale(0.9);
    }

    100% {
      transform: scale(1);
    }
  }
  animation: scale 1000ms infinite alternate ease-in-out;
`;

export const TweetsList = styled.ul`
  display: flex;

  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
`;

export const LoadMoreBtn = styled.button`
  background-color: #00b0ff;
  color: #fff;
  padding: 12px 24px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: all 300ms ease;

  :hover {
    background-color: #0093e0;
  }

  :active {
    transform: translateY(1px);
  }

  :disabled {
    background-color: #d9d9d9;
    color: #666;
    cursor: not-allowed;
  }
`;
