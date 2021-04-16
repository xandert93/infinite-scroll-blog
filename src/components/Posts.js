import React, { useCallback, useContext, useRef } from 'react';
import { globalContext } from '../contexts/globalContext';
import SinglePost from './SinglePost';

const Posts = ({ inputRef }) => {
  const { filteredPosts, setLoading, fetchPosts } = useContext(globalContext);

  const observerRef = useRef();

  const observePost = useCallback(
    (node) => {
      if (!node) return;
      observerRef.current = new IntersectionObserver(handleIntersection, {
        threshold: 1,
      });
      let check =
        ![0, 100].includes(filteredPosts.length) && !inputRef.current.value;
      if (check) observerRef.current.observe(node);
    },
    [filteredPosts]
  );

  const handleIntersection = ([firstEntry]) => {
    if (firstEntry.isIntersecting) {
      setLoading();
      fetchPosts();
      observerRef.current.unobserve(firstEntry.target);
    }
  };

  return (
    <div className="posts-container">
      {filteredPosts.map(({ id, title, body }) => (
        <SinglePost
          key={id}
          postNum={id}
          title={title}
          body={body}
          observePost={id === filteredPosts.length ? observePost : null}
        />
      ))}
    </div>
  );
};

export default Posts;
