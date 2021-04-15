import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../contexts/GlobalContext';
import SinglePost from './SinglePost';

const Posts = () => {
  const {
    isLoading,
    filteredPosts,
    errMsg,
    setIsLoading,
    fetchPosts,
  } = useContext(GlobalContext);

  useEffect(() => {
    setIsLoading();
    fetchPosts();
  }, []);

  console.log(isLoading);

  return (
    <div className="posts-container">
      {isLoading && <h3>LOADING...</h3>}
      {errMsg && <h3>{errMsg} Please try refreshing</h3>}
      {filteredPosts &&
        filteredPosts.map(({ id, title, body }) => (
          <SinglePost key={id} postNum={id} title={title} body={body} />
        ))}
    </div>
  );
};

export default Posts;
