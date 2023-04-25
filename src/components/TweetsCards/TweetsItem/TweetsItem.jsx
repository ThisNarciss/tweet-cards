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

export function TweetsItem({
  user: { id, avatar, tweets, followers, following },
}) {
  const [isFollow, setIsFollow] = useState(following);
  const [newFollowersCount, setNewFollowersCount] = useState(followers);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!error) return;
    Notify.failure('Error response');
  }, [error]);

  const onBtnClick = () => {
    if (!isFollow) {
      setIsLoading(true);

      updateUsersData(id, { followers: newFollowersCount + 1, following: true })
        .then(({ followers, following }) => {
          setIsFollow(following);
          setNewFollowersCount(followers);
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
        .then(({ followers, following }) => {
          setIsFollow(following);
          setNewFollowersCount(followers);
          Notify.success('Unsubscribe success');
        })
        .catch(error => setError(error))
        .finally(() => setIsLoading(false));
    }
  };

  const changeFollowersCountStyle = () => {
    const followers = newFollowersCount.toString().split('');
    if (followers.length > 3) {
      followers.splice(followers.length - 3, 0, ',');
      return followers.join('');
    }
    return followers.join('');
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
          {changeFollowersCountStyle()} followers
        </Text>
      </TextContainer>
      <Btn onClick={onBtnClick} isFollow={isFollow}>
        {isFollow ? 'Following' : 'Follow'} {isLoading && <Loader />}
      </Btn>
    </Item>
  );
}
