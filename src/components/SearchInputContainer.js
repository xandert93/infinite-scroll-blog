import React, { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";
import useSearchChange from "../customHooks/useSearchChange";

const SearchInputContainer = () => {
  let { dispatch } = useContext(GlobalContext);
  const [searchField, handleSearchChange] = useSearchChange(dispatch);

  return (
    <div className="search-input-container">
      <input
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
