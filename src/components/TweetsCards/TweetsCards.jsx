import { getUsersData } from '../../api/tweets-card-api';
import { useEffect, useState, useReducer } from 'react';

import {
  BackLink,
  LoadMoreBtn,
  TweetsContainer,
  TweetsList,
} from './TweetsCards.styled';
import { TweetsItem } from './TweetsItem/TweetsItem';
import { useLocation } from 'react-router-dom';
import { RiArrowGoBackFill } from 'react-icons/ri';
import { FilterTweets } from '../FilterTweets/FilterTweets';

function statusFilter(state, action) {
  switch (action.type) {
    case 'all':
      return (state = 'all');
    case 'follow':
      return (state = 'follow');
    case 'following':
      return (state = 'following');

    default:
      return;
  }
}

export function TweetsCards() {
  const [users, setUsers] = useState([]);
  const [pagCount, setPagCount] = useState(3);
  const [newStatus, dispatch] = useReducer(statusFilter, 'all');

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    getUsersData(pagCount)
      .then(users => setUsers(users))
      .catch(error => console.log(error));
  }, [pagCount]);

  const handleLoadMoreBtn = () => {
    setPagCount(prevState => prevState + 3);
  };

  const addStatusCards = status => {
    dispatch({ type: status });
  };

  const filterUsers = filter => {
    switch (filter) {
      case 'follow':
        return users.filter(({ following }) => !following);
      case 'following':
        return users.filter(({ following }) => following);

      default:
        return users;
    }
  };

  const filteredUsers = filterUsers(newStatus);

  return (
    <TweetsContainer>
      <BackLink to={backLinkHref}>
        <RiArrowGoBackFill />
        Go back
      </BackLink>
      <FilterTweets addStatusCards={addStatusCards} newStatus={newStatus} />
      <TweetsList>
        {filteredUsers.map(user => (
          <TweetsItem key={user.id} user={user} />
        ))}
      </TweetsList>
      <LoadMoreBtn onClick={handleLoadMoreBtn}>Load more</LoadMoreBtn>
    </TweetsContainer>
  );
}
