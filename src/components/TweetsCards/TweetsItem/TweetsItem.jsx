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

import logo from '../../../images/logo-goit.svg';
import picture from '../../../images/picture-@1x.png';
import rectangle from '../../../images/rectangle-@1x.png';
import { useEffect, useState } from 'react';
import { updateUsersData } from '../../../api/tweets-card-api';
import { ColorRing } from 'react-loader-spinner';

export function TweetsItem({
  user: { id, avatar, tweets, followers, following },
}) {
  const [isFollow, setIsFollow] = useState(following);
  const [newFollowersCount, setNewFollowersCount] = useState(followers);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!error) {
      return;
    }
    return alert('Upsssss');
  }, [error]);

  const onBtnClick = () => {
    if (!isFollow) {
      setIsLoading(true);

      updateUsersData(id, { followers: newFollowersCount + 1, following: true })
        .then(({ followers, following }) => {
          setIsFollow(following);
          setNewFollowersCount(followers);
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
        {isFollow ? 'Following' : 'Follow'}{' '}
        {isLoading && (
          <ColorRing
            visible={true}
            height="20"
            width="20"
            ariaLabel="blocks-loading"
            wrapperClass="blocks-wrapper"
            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
          />
        )}
      </Btn>
    </Item>
  );
}
