import React, { useContext, useEffect, useState } from 'react';
import { globalContext } from '../contexts/globalContext';

const SearchBar = ({ inputRef }) => {
  let { filterPosts, isLoading } = useContext(globalContext);
  const [userInput, setUserInput] = useState('');

  // eslint-disable-next-line
  useEffect(() => filterPosts(userInput), [userInput]);

  return (
    <div className="search-input-container">
      <input
        ref={inputRef}
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        className="search-input"
        placeholder="Filter results..."
        style={{ pointerEvents: `${isLoading ? 'none' : ''}` }}
      />
    </div>
  );
};

export default SearchBar;
