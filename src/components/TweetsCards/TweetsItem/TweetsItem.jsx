import {
  Avatar,
  AvatarBox,
  Btn,
  Ellipse,
  Item,
  Logo,
  Picture,
  PictureBox,
  Rectangle,
  Text,
  TextContainer,
} from './TweetsItem.styled';

import logo from '../../../images/logo-goit.svg';
import picture from '../../../images/picture-@1x.png';
import rectangle from '../../../images/rectangle-@1x.png';
import { useEffect, useState } from 'react';
import { updateUsersData } from '../../../api/tweets-card-api';
// import ellipse from '../../../images/ellipse-@1x.png';

export function TweetsItem({ user: { id, avatar, user, tweets, followers } }) {
  const [isFollow, setIsFollow] = useState(false);
  const [btnText, setBtnText] = useState('Follow');
  const [newFollowers, setNewFollowers] = useState(followers);

  useEffect(() => {}, []);

  const onBtnClick = () => {
    if (!isFollow) {
      setNewFollowers(prevState => prevState + 1);
      setBtnText('Following');
      setIsFollow(true);
    } else {
      setNewFollowers(prevState => prevState - 1);
      setBtnText('Follow');
      setIsFollow(false);
    }
  };
  console.log(newFollowers);
  return (
    <Item>
      <Logo src={logo} />

      <PictureBox>
        <Picture src={picture} />
      </PictureBox>
      <Rectangle src={rectangle} />
      <AvatarBox>
        <Avatar src={avatar} />
        {/* <Ellipse src={ellipse} /> */}
      </AvatarBox>
      <TextContainer>
        <Text>{tweets} tweets</Text>
        <Text style={{ marginTop: '16px' }}>{newFollowers} followers</Text>
      </TextContainer>
      <Btn onClick={onBtnClick} isFollow={isFollow}>
        {btnText}
      </Btn>
    </Item>
  );
}
