import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../contexts/GlobalContext";
import usePostsFetch from "../customHooks/usePostsFetch";
import PostContainers from "./PostContainers";

const Body = () => {
  const { state, dispatch } = useContext(GlobalContext);
  let { filteredPosts, hasError, base_url } = state;

  usePostsFetch(base_url, dispatch);

  useEffect(() => {
    if (filteredPosts.length !== 0) {
      let allPosts = document.querySelectorAll(".post-container");
      let lastPost = allPosts[filteredPosts.length - 1];
      const handleIntersection = (entries) => {
        if (entries[0].isIntersecting) {
          dispatch({ type: "GET_MORE_POSTS" });
        }
      };
      let myObserver = new IntersectionObserver(handleIntersection, {
        threshold: 1,
      });
      myObserver.observe(lastPost);
    }
  }, [filteredPosts]);

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
