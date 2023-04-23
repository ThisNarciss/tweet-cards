import { FilterButton, FilterContainer } from './FilterTweets.styled';

export function FilterTweets({ addStatusCards }) {
  return (
    <FilterContainer>
      <FilterButton onClick={() => addStatusCards('all')}>All</FilterButton>
      <FilterButton onClick={() => addStatusCards('follow')}>
        Follow
      </FilterButton>
      <FilterButton onClick={() => addStatusCards('following')}>
        Following
      </FilterButton>
    </FilterContainer>
  );
}
