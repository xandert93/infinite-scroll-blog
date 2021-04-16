import React, { useContext, useEffect, useState } from 'react';
import { globalContext } from '../contexts/globalContext';

const SearchBar = ({ inputRef }) => {
  let { filterPosts } = useContext(globalContext);
  const [userInput, setUserInput] = useState('');

  useEffect(() => filterPosts(userInput), [userInput]);

  return (
    <div className="search-input-container">
      <input
        ref={inputRef}
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        className="search-input"
        placeholder="Filter results..."
      />
    </div>
  );
};

export default SearchBar;
