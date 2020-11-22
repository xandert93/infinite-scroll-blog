import React, { useContext, useRef } from "react";
import { GlobalContext } from "../contexts/GlobalContext";
import useSearchChange from "../customHooks/useSearchChange";

const SearchInputContainer = () => {
  let { dispatch } = useContext(GlobalContext);
  const [searchField, handleSearchChange] = useSearchChange(dispatch);
  const inputRef = useRef();

  return (
    <div className="search-input-container">
      <input
        ref={inputRef}
        value={searchField}
        onChange={handleSearchChange}
        className="search-input"
        placeholder="Filter results..."
      />
      <button className="search-btn">
        <i className="fas fa-search"></i>
      </button>
    </div>
  );
};

export default SearchInputContainer;
