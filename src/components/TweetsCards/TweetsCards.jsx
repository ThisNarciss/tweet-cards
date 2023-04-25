import { getUsersData } from '../../api/tweets-card-api';
import { useEffect, useState, useReducer, useRef } from 'react';

import {
  BackLink,
  ButtonUp,
  LoadMoreBtn,
  TweetsContainer,
  TweetsList,
  TweetsSection,
} from './TweetsCards.styled';
import { TweetsItem } from './TweetsItem/TweetsItem';
import { useLocation } from 'react-router-dom';
import { RiArrowGoBackFill } from 'react-icons/ri';
import { FilterTweets } from '../FilterTweets/FilterTweets';
import { Notify } from 'notiflix';
import { Loader } from '../Loader/Loader';
import { statusFilter } from '../../utils/reduser-func';
import { filterUsers } from '../../utils/filter-func';

export function TweetsCards() {
  const [users, setUsers] = useState([]);
  const [endPagCount, setEndPagCount] = useState(3);
  const [startPagCount, setStartPagCount] = useState(0);
  const [newStatus, dispatch] = useReducer(statusFilter, 'all');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const listRef = useRef(null);
  const currentListRef = listRef.current;
  const btnUpRef = useRef(null);
  const currentBtnUpRef = btnUpRef.current;
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    setIsLoading(true);
    const abortController = new AbortController();
    const signal = abortController.signal;
    getUsersData(startPagCount, endPagCount, signal)
      .then(users => {
        setUsers(prevState => [...prevState, ...users]);
      })
      .catch(error => {
        setError(error);
      })
      .finally(() => setIsLoading(false));
    return () => {
      abortController.abort();
    };
  }, [startPagCount, endPagCount, newStatus]);

  useEffect(() => {
    if (currentListRef) {
      const list = listRef.current;

      window.scrollBy({
        top: list.scrollHeight - list.scrollTop,
        behavior: 'smooth',
      });
    }
  }, [users, currentListRef]);

  useEffect(() => {
    if (!error) return;
    Notify.failure('Error response');
  }, [error]);

  const handleBtnUpClick = () => {
    btnUpRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleLoadMoreBtn = () => {
    setStartPagCount(prevState => prevState + 3);
    setEndPagCount(prevState => prevState + 3);
  };

  const addStatusCards = status => {
    dispatch({ type: status });
  };

  const filteredUsers = filterUsers(newStatus, users);

  return (
    <TweetsSection>
      <TweetsContainer ref={btnUpRef}>
        <BackLink to={backLinkHref}>
          <RiArrowGoBackFill />
          Go back
        </BackLink>
        <FilterTweets addStatusCards={addStatusCards} newStatus={newStatus} />
        {Boolean(users.length) && (
          <TweetsList ref={listRef}>
            {filteredUsers.map(user => (
              <TweetsItem key={user.id} user={user} />
            ))}
          </TweetsList>
        )}
        {isLoading && !error && <Loader size={100} />}
        <LoadMoreBtn onClick={handleLoadMoreBtn}>Load more</LoadMoreBtn>
      </TweetsContainer>
      <ButtonUp onClick={handleBtnUpClick}>button up</ButtonUp>
    </TweetsSection>
  );
}
