import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { globalContext } from '../contexts/globalContext';
import PropTypes from 'prop-types';

const SearchInputBox = styled.div`
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

  @media only screen and (min-width: 30em) and (max-height: 22.5em) {
    padding-bottom: 5rem;
  }
`;

const SearchInput = styled.input.attrs({ placeholder: 'Filter results...' })`
  pointer-events: ${({ isLoading }) => (isLoading ? 'none' : 'auto')};
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

  &::placeholder {
    color: rgb(95, 95, 95);
  }

  &:focus {
    outline: none;
    border-color: rgb(46, 189, 255);
    transform: scale(1);
  }
`;

const SearchBar = ({ inputRef }) => {
  let { filterPosts, isLoading } = useContext(globalContext);
  const [userInput, setUserInput] = useState('');

  // eslint-disable-next-line
  useEffect(() => filterPosts(userInput), [userInput]);

  return (
    <SearchInputBox>
      <SearchInput
        ref={inputRef}
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        isLoading={isLoading}
      />
    </SearchInputBox>
  );
};

SearchBar.propTypes = {
  inputRef: PropTypes.object.isRequired,
};

export default SearchBar;
