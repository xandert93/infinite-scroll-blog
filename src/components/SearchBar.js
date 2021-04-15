import React, { useContext, useEffect, useRef, useState } from 'react';
import { GlobalContext } from '../contexts/GlobalContext';

const SearchBar = () => {
  const inputRef = useRef();
  let { filterPosts } = useContext(GlobalContext);
  const [searchField, setSearchField] = useState('');

  useEffect(() => filterPosts(searchField), [searchField]);

  return (
    <div className="search-input-container">
      <input
        ref={inputRef}
        value={searchField}
        onChange={(e) => setSearchField(e.target.value)}
        className="search-input"
        placeholder="Filter results..."
      />
    </div>
  );
};

export default SearchBar;
