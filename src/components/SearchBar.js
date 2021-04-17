import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { globalContext } from '../contexts/globalContext';

let SearchBar = ({ inputRef, className }) => {
  let { filterPosts, isLoading } = useContext(globalContext);
  const [userInput, setUserInput] = useState('');

  useEffect(() => filterPosts(userInput), [userInput]);

  return (
    <div className={className}>
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

export default SearchBar = styled(SearchBar)`
  height: 10vh;

  @media only screen and (min-width: 17.5em) and (min-height: 40em) {
    height: 7vh;
  }

  @media only screen and (min-width: 22.5em) and (min-height: 40em) {
    height: 8vh;
  }

  @media only screen and (min-width: 22.5em) and (min-height: 45em) {
    height: 7vh;
  }

  @media only screen and (min-width: 25em) and (min-height: 50em) {
    height: 7vh;
  }

  .search-input {
    margin: 0 auto;
    width: 80%;
    height: 3rem;
    max-width: 50rem;
    transform: scale(0.93);
    border: 3px solid rgb(255, 255, 255);
    border-radius: var(--bord-rad-sm);
    font-size: 1.6rem;
    text-align: center;
    transition: transform 0.3s, border-color 0.6s;
  }

  .search-input::placeholder {
    color: rgb(95, 95, 95);
  }

  .search-input:focus {
    outline: none;
    border-color: rgb(46, 189, 255);
    transform: scale(1);
  }
`;
