import { useState } from 'react';
import {
  DropDownBox,
  DropDownBtn,
  FilterButton,
  FilterContainer,
  FilterIcon,
} from './FilterTweets.styled';

export function FilterTweets({ addStatusCards, newStatus }) {
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
    </DropDownBox>
  );
}
