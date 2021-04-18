import React, { useCallback, useContext, useRef } from 'react';
import styled from 'styled-components';
import { globalContext } from '../contexts/globalContext';
import SinglePost from './SinglePost';

const PostsContainer = styled.div`
  height: 65vh;

  @media only screen and (min-width: 17.5em) and (min-height: 40em) {
    height: 68vh;
  }

  @media only screen and (min-width: 22.5em) and (min-height: 40em) {
    height: 69vh;
  }

  @media only screen and (min-width: 22.5em) and (min-height: 45em) {
    height: 71vh;
  }

  @media only screen and (min-width: 25em) and (min-height: 50em) {
    height: 71vh;
  }

  margin: 0 auto;
  overflow-y: scroll;
  padding: 1rem 0 1rem 6vw;

  & > :not(:last-child) {
    margin-bottom: var(--margin-sm);
  }
`;

const Posts = ({ inputRef }) => {
  const { filteredPosts, setLoading, fetchPosts } = useContext(globalContext);

  const observerRef = useRef();

  const observePost = useCallback(
    (node) => {
      if (!node) return;
      observerRef.current = new IntersectionObserver(handleIntersection, {
        threshold: 1,
      });
      if ([0, 100].includes(filteredPosts.length) || inputRef.current.value)
        return;
      else observerRef.current.observe(node);
    },
    [filteredPosts]
  );

  const handleIntersection = ([firstEntry]) => {
    if (!firstEntry.isIntersecting || inputRef.current.value) return;
    setLoading();
    fetchPosts();
    observerRef.current.unobserve(firstEntry.target);
  };

  return (
    <PostsContainer>
      {filteredPosts.map((post) => (
        <SinglePost
          key={post.id}
          post={post}
          observePost={post.id === filteredPosts.length ? observePost : null}
        />
      ))}
    </PostsContainer>
  );
};

export default Posts;
