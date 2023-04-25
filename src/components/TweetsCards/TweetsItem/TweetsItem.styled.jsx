import styled from 'styled-components';

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

export const Logo = styled.img`
  @keyframes changeFill {
    0% {
      fill: deeppink;
    }

    50% {
      fill: orange;
    }

    100% {
      fill: deepskyblue;
    }
  }
  animation-name: changeFill;
  animation-duration: 3000ms;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-direction: alternate;
`;
export const Rectangle = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
export const AvatarBox = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 10px solid #ebd8ff;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
`;
export const Ellipse = styled.img`
  object-fit: fill;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
`;
export const Avatar = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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
  @keyframes rotateY {
    0% {
      transform: perspective(400px) rotateY(0deg);
    }

    100% {
      transform: perspective(400px) rotateY(10deg);
    }
  }
  animation: rotateY 1500ms infinite alternate ease-in-out;
`;
export const TextContainer = styled.div`
  margin-top: 242px;
`;
export const Text = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
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
  line-height: 22px;
  text-transform: uppercase;
  color: #373737;
  transition: background-color 250ms linear;
  background: ${({ isFollow }) => (isFollow ? '#5cd3a8' : '#ebd8ff')};
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  transition: all 300ms ease;
  :hover {
    background-color: ${({ isFollow }) => (isFollow ? '#3a8167' : '#8f829c')};
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
