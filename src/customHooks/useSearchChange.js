import { useState, useEffect } from "react";

const useSearchChange = (dispatch) => {
  const [searchField, setSearchField] = useState("");

  const handleSearchChange = (e) => setSearchField(e.target.value);

  useEffect(
    () =>
      dispatch({
        type: "SEARCH_CHANGE",
        payload: searchField.toLowerCase(),
      }),
    [searchField]
  );

  return [searchField, handleSearchChange];
};

export default useSearchChange;
