import PropTypes from 'prop-types';
import { useState } from 'react';
import {
  DropDownBox,
  DropDownBtn,
  FilterButton,
  FilterContainer,
  FilterIcon,
} from './FilterTweets.styled';

export function FilterTweets({ addStatusCards, filter }) {
  const [isShow, setIsShow] = useState(false);

  const handleDropDownClick = () => {
    isShow ? setIsShow(false) : setIsShow(true);
  };

  return (
    <DropDownBox>
      <DropDownBtn onClick={handleDropDownClick}>
        Filter
        <FilterIcon size={40} />
      </DropDownBtn>
      <FilterContainer isShow={isShow}>
        <FilterButton
          selected={filter === 'all'}
          onClick={() => addStatusCards('all')}
        >
          All
        </FilterButton>
        <FilterButton
          selected={filter === 'follow'}
          onClick={() => addStatusCards('follow')}
        >
          Follow
        </FilterButton>
        <FilterButton
          selected={filter === 'following'}
          onClick={() => addStatusCards('following')}
        >
          Following
        </FilterButton>
      </FilterContainer>
    </DropDownBox>
  );
}

FilterTweets.propTypes = {
  addStatusCards: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};
