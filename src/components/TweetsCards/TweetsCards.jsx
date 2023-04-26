import { getUsersData } from '../../api/tweets-card-api';
import { useEffect, useState, useReducer, useRef } from 'react';
import {
  BackLink,
  BtnUpIcon,
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
import { usePagination } from '../../hooks/usePagination';

export function TweetsCards() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [loadMore, endPagCount, startPagCount] = usePagination();
  const [newStatus, dispatch] = useReducer(statusFilter, 'all');

  const listRef = useRef(null);
  const currentListRef = listRef.current;
  const btnUpRef = useRef(null);
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
  }, [startPagCount, endPagCount]);

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

  const addStatusCards = status => {
    dispatch({ type: status });
  };

  const filteredUsers = filterUsers(newStatus, users);

  return (
    <TweetsSection title="Tweet Cards">
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
        <LoadMoreBtn onClick={loadMore}>Load more</LoadMoreBtn>
      </TweetsContainer>
      <ButtonUp onClick={handleBtnUpClick}>
        <BtnUpIcon size={80} />
      </ButtonUp>
    </TweetsSection>
  );
}
