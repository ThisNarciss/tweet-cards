import { getUsersData } from '../../api/tweets-card-api';
import { useEffect, useState } from 'react';
import { TweetsContainer, TweetsList } from './TweetsCards.styled';
import { TweetsItem } from './TweetsItem/TweetsItem';

export function TweetsCards() {
  const [users, setUsers] = useState([]);
  const [tweet, setTweet] = useState({});

  useEffect(() => {
    getUsersData()
      .then(users => setUsers(users))
      .catch(error => console.log(error));
  }, []);
  console.log(users);
  return (
    <TweetsContainer>
      <TweetsList>
        {users.map(user => (
          <TweetsItem key={user.id} user={user} />
        ))}
      </TweetsList>
    </TweetsContainer>
  );
}
