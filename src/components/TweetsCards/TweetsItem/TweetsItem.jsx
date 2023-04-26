import PropTypes from 'prop-types';
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
import { Loader } from '../../Loader/Loader';
import { Notify } from 'notiflix';
import { changeFollowersCountStyle } from '../../../utils/counter-ftyle-func';

import logo from '../../../images/logo-goit.svg';
import picture from '../../../images/picture-@1x.png';
import picture2x from '../../../images/picture-@2x.png';
import rectangle from '../../../images/rectangle-@1x.png';
import rectangle2x from '../../../images/rectangle-@2x.png';

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
  }, [followers, following]);

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
          setNewFollowersCount(prevState => prevState + 1);
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
          setNewFollowersCount(prevState => prevState - 1);
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
        <Picture
          srcSet={`${picture} 1x, ${picture2x} 2x`}
          src={picture}
          alt="two comment with done icon and question mark"
        />
      </PictureBox>
      <Rectangle
        srcSet={`${rectangle} 1x, ${rectangle2x} 2x`}
        src={rectangle}
      />
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

TweetsItem.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    tweets: PropTypes.number.isRequired,
    following: PropTypes.bool.isRequired,
    followers: PropTypes.number.isRequired,
  }).isRequired,
};
