import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { Notify } from 'notiflix';
import {
  Avatar,
  AvatarBox,
  Btn,
  Item,
  Logo,
  Picture,
  PictureBox,
  Text,
  TextContainer,
} from './TweetsItem.styled';
import { updateUsersData } from '@/api/tweets-card-api';
import { Loader } from '@/components/Loader/Loader';
import { changeFollowersCountStyle } from '@/utils/counter-ftyle-func';

import logo from '@/images/logo-goit.svg';
import picture from '@/images/picture-@1x.png';
import picture2x from '@/images/picture-@2x.png';
import { getUserStatus, setNewStatus } from '../../../utils/set-local-status';

export function TweetsItem({ user: { id, avatar, tweets, followers } }) {
  const [newFollowersCount, setNewFollowersCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setNewFollowersCount(followers);
  }, [followers]);

  useEffect(() => {
    if (!error) return;
    Notify.failure('Error response');
  }, [error]);

  const onBtnClick = () => {
    if (!getUserStatus(id)) {
      setIsLoading(true);
      updateUsersData(id, {
        followers: newFollowersCount + 1,
      })
        .then(({ id }) => {
          setNewStatus(id, true);
          setNewFollowersCount(prevState => prevState + 1);
          Notify.success('Subscription success');
        })
        .catch(error => setError(error))
        .finally(() => setIsLoading(false));
    } else {
      setIsLoading(true);

      updateUsersData(id, {
        followers: newFollowersCount - 1,
      })
        .then(({ id }) => {
          setNewStatus(id, false);
          setNewFollowersCount(prevState => prevState - 1);
          Notify.success('Unsubscribe success');
        })
        .catch(error => setError(error))
        .finally(() => setIsLoading(false));
    }
  };

  return (
    <Item>
      <Logo src={logo} alt="avatar" />
      <PictureBox>
        <Picture
          srcSet={`${picture} 1x, ${picture2x} 2x`}
          src={picture}
          alt="two comment with done icon and question mark"
        />
      </PictureBox>
      <AvatarBox>
        <Avatar src={avatar} />
      </AvatarBox>
      <TextContainer>
        <Text>{tweets} tweets</Text>
        <Text style={{ marginTop: '16px' }}>
          {changeFollowersCountStyle(newFollowersCount)} followers
        </Text>
      </TextContainer>
      <Btn onClick={onBtnClick} id={id}>
        {getUserStatus(id) ? 'Following' : 'Follow'} {isLoading && <Loader />}
      </Btn>
    </Item>
  );
}

TweetsItem.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    tweets: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
  }).isRequired,
};
