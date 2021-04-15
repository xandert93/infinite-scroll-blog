import React, { useContext, useEffect } from 'react';
import { globalContext } from '../contexts/globalContext';
import SinglePost from './SinglePost';

const Posts = ({ postRef }) => {
  const { filteredPosts, fetchPosts } = useContext(globalContext);

  return (
    <div className="posts-container">
      {filteredPosts.map(({ id, title, body }) => (
        <SinglePost
          key={id}
          postNum={id}
          title={title}
          body={body}
          postRef={id === filteredPosts.length ? postRef : null}
        />
      ))}
    </div>
  );
};

export default Posts;
