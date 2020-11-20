import { useEffect } from "react";
import { get } from "axios";

const usePostsFetch = (base_url, dispatch) => {
  useEffect(
    () =>
      setTimeout(() => {
        get(base_url)
          .then((response) => {
            dispatch({ type: "GET_POSTS", payload: response.data });
          })
          .catch((err) =>
            dispatch({ type: "ERROR", payload: "There was an error." })
          );
      }, 300),
    [base_url]
  );
};

export default usePostsFetch;
