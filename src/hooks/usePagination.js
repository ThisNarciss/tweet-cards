import { useState } from 'react';

export function usePagination() {
  const [endPagCount, setEndPagCount] = useState(3);
  const [startPagCount, setStartPagCount] = useState(0);
  const loadMore = () => {
    setStartPagCount(prevState => prevState + 3);
    setEndPagCount(prevState => prevState + 3);
  };
  return [loadMore, endPagCount, startPagCount];
}
