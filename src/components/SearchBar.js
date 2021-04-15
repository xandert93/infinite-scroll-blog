import React, { useContext, useRef } from 'react';
import { GlobalContext } from '../contexts/GlobalContext';
import useSearchChange from '../customHooks/useSearchChange';

const SearchBar = () => {
  const inputRef = useRef();
  let { dispatch } = useContext(GlobalContext);
  const [searchField, handleSearchChange] = useSearchChange(dispatch);

  return (
    <div className="search-input-container">
      <input
        ref={inputRef}
        value={searchField}
        onChange={handleSearchChange}
        className="search-input"
        placeholder="Filter results..."
      />
    </div>
  );
};

export default SearchBar;
