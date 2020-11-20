import { useEffect } from "react";

const usePostsFetchMore = (dispatch) => {
  useEffect(() => {
    window.addEventListener(
      "keypress",
      (e) => e.key === "Enter" && dispatch({ type: "GET_MORE_POSTS" })
    );
  }, [dispatch]);
};

export default usePostsFetchMore;
