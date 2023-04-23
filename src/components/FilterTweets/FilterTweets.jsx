import { FilterButton, FilterContainer } from './FilterTweets.styled';

export function FilterTweets({ addStatusCards, newStatus }) {
  return (
    <FilterContainer>
      <FilterButton
        selected={newStatus === 'all'}
        onClick={() => addStatusCards('all')}
      >
        All
      </FilterButton>
      <FilterButton
        selected={newStatus === 'follow'}
        onClick={() => addStatusCards('follow')}
      >
        Follow
      </FilterButton>
      <FilterButton
        selected={newStatus === 'following'}
        onClick={() => addStatusCards('following')}
      >
        Following
      </FilterButton>
    </FilterContainer>
  );
}
