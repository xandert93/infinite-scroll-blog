import React from "react";

const SearchInputContainer = ({ searchField, dispatch }) => (
  <div className="search-input-container">
    <input
      value={searchField}
      onChange={(e) =>
        dispatch({
          type: "SEARCH_CHANGE",
          payload: e.target.value.toLowerCase(),
        })
      }
      className="search-input"
      placeholder="Filter results..."
    />
    <button className="search-btn">
      <i className="fas fa-search"></i>
    </button>
  </div>
);

export default SearchInputContainer;
