import styled, { keyframes } from 'styled-components';

const rotateY = keyframes`
    0% {
      transform: perspective(400px) rotateY(0deg);
    }

    100% {
      transform: perspective(400px) rotateY(10deg);
    }
`;

export const Item = styled.li`
  position: relative;
  padding: 20px;
  width: 380px;
  height: 460px;

  background-image: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;

export const Logo = styled.img``;

export const Rectangle = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
export const AvatarBox = styled.div`
  width: 80px;
  height: 80px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 136px;
  position: relative;
  ::before {
    content: '';
    position: absolute;
    right: -150px;
    top: 50%;
    transform: translateY(-50%);
    display: inline-block;
    width: 150px;
    height: 8px;
    background-color: #ebd8ff;
  }
  ::after {
    content: '';
    position: absolute;
    left: -150px;
    top: 50%;
    transform: translateY(-50%);
    display: inline-block;
    width: 150px;
    height: 8px;
    background-color: #ebd8ff;
  }
`;

export const Avatar = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 10px solid #ebd8ff;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
  z-index: 2;
`;
export const PictureBox = styled.div`
  width: 308px;
  position: absolute;
  top: 28px;
  left: 50%;
  transform: translateX(-50%);
`;
export const Picture = styled.img`
  animation: ${rotateY} 1500ms infinite alternate ease-in-out;
`;
export const TextContainer = styled.div`
  margin-top: 26px;
`;
export const Text = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  text-transform: uppercase;
  text-align: center;
  color: #ebd8ff;
`;

export const Btn = styled.button`
  width: 196px;
  padding: 14px;
  margin-top: 26px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.22;
  text-transform: uppercase;
  color: #373737;
  transition: background-color 250ms linear;
  background: ${({ user }) => {
    return JSON.parse(localStorage.getItem(`${user}`)) ? '#5cd3a8' : '#ebd8ff';
  }};
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  transition: all 300ms ease;
  :hover {
    background-color: ${({ user }) => {
      return JSON.parse(localStorage.getItem(`${user}`))
        ? '#3a8167'
        : '#8f829c';
    }};
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
