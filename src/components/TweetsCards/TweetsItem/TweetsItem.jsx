import {
  Avatar,
  AvatarBox,
  Btn,
  Item,
  Logo,
  Picture,
  PictureBox,
  Rectangle,
  Text,
  TextContainer,
} from './TweetsItem.styled';
import { useEffect, useState } from 'react';
import { updateUsersData } from '../../../api/tweets-card-api';

import logo from '../../../images/logo-goit.svg';
import picture from '../../../images/picture-@1x.png';
import rectangle from '../../../images/rectangle-@1x.png';
import { Loader } from '../../Loader/Loader';
import { Notify } from 'notiflix';
import { changeFollowersCountStyle } from '../../../utils/counter-ftyle-func';

export function TweetsItem({
  user: { id, avatar, tweets, followers, following },
}) {
  const [isFollow, setIsFollow] = useState(false);
  const [newFollowersCount, setNewFollowersCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsFollow(following);
    setNewFollowersCount(followers);
  }, []);

  useEffect(() => {
    if (!error) return;
    Notify.failure('Error response');
  }, [error]);

  const onBtnClick = () => {
    if (!isFollow) {
      setIsLoading(true);

      updateUsersData(id, { followers: newFollowersCount + 1, following: true })
        .then(({ following }) => {
          setIsFollow(following);
          setNewFollowersCount(state => state + 1);
          Notify.success('Subscription success');
        })
        .catch(error => setError(error))
        .finally(() => setIsLoading(false));
    } else {
      setIsLoading(true);

      updateUsersData(id, {
        followers: newFollowersCount - 1,
        following: false,
      })
        .then(({ following }) => {
          setIsFollow(following);
          setNewFollowersCount(state => state - 1);
          Notify.success('Unsubscribe success');
        })
        .catch(error => setError(error))
        .finally(() => setIsLoading(false));
    }
  };

  return (
    <Item>
      <Logo src={logo} />

      <PictureBox>
        <Picture src={picture} />
      </PictureBox>
      <Rectangle src={rectangle} />
      <AvatarBox>
        <Avatar src={avatar} />
      </AvatarBox>
      <TextContainer>
        <Text>{tweets} tweets</Text>
        <Text style={{ marginTop: '16px' }}>
          {changeFollowersCountStyle(newFollowersCount)} followers
        </Text>
      </TextContainer>
      <Btn onClick={onBtnClick} isFollow={isFollow}>
        {isFollow ? 'Following' : 'Follow'} {isLoading && <Loader />}
      </Btn>
    </Item>
  );
}
