import React, { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";
import usePostsFetch from "../customHooks/usePostsFetch";
import PostContainer from "./PostContainer";

const PostsContainer = () => {
  const { state, dispatch } = useContext(GlobalContext);
  let { filteredPosts, hasError, base_url } = state;

  usePostsFetch(base_url, dispatch);

  return (
    <div className="posts-container">
      {filteredPosts.length === 0 ? (
        <h3>LOADING...</h3>
      ) : hasError ? (
        <h3>Please try refreshing</h3>
      ) : (
        filteredPosts.map(({ id, title, body }) => (
          <PostContainer key={id} postNum={id} title={title} body={body} />
        ))
      )}
    </div>
  );
};

export default PostsContainer;
