import React, { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";
import usePostsFetch from "../customHooks/usePostsFetch";
import PostContainers from "./PostContainers";

const Body = () => {
  const { state, dispatch } = useContext(GlobalContext);
  let { filteredPosts, hasError, base_url } = state;

  usePostsFetch(base_url, dispatch);

  return (
    <>
      {filteredPosts.length === 0 ? (
        <h3>LOADING...</h3>
      ) : hasError ? (
        <h3>Please try refreshing</h3>
      ) : (
        <PostContainers />
      )}
    </>
  );
};

export default Body;
