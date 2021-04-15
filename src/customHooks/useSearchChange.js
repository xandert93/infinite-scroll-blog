import { useState, useEffect } from 'react';
import { SEARCH_CHANGE } from '../reducer/actions';

const useSearchChange = (dispatch) => {
  const [searchField, setSearchField] = useState('');

  const handleSearchChange = (e) => setSearchField(e.target.value);

  useEffect(
    () =>
      dispatch({
        type: SEARCH_CHANGE,
        payload: searchField.toLowerCase(),
      }),
    [searchField]
  );

  return [searchField, handleSearchChange];
};

export default useSearchChange;
