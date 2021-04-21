import React, { useCallback, useRef, useState } from 'react';
import styled from 'styled-components';

const PostContainer = styled.div`
  position: relative;
  width: 95%;
  padding: 1.6rem;
  border-radius: var(--bord-rad-sm);
  background: rgba(0, 90, 225, 0.193);
  box-shadow: var(--box-shad-sm);
  opacity: ${({ show }) => (show ? 1 : 0)};
  transform: translateY(${({ show }) => (show ? 0 : '100%')});
  transition: opacity 1.5s, transform 1.5s;
`;

const PostId = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3rem;
  width: 3rem;
  left: -0.7rem;
  top: -0.7rem;
  font-size: 1.2rem;
  font-weight: 600;
  border-radius: 50%;
  border: 1px solid white;
  background: linear-gradient(90deg, rgb(2, 1, 56), black 90%);
`;

const PostTitle = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
  text-transform: capitalize;
  font-style: italic;
  padding-bottom: 1.5rem;
`;

const PostBody = styled.div`
  font-size: 1.5rem;
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.7rem;
`;

const SinglePost = ({ post: { title, body, id: postNum }, observePost }) => {
  const [revealPost, setRevealPost] = useState(false);

  const observer = useRef();

  const observePostId = useCallback((node) => {
    if (!node) return;
    observer.current = new IntersectionObserver(intersectionHandler);
    observer.current.observe(node);
  }, []);

  const intersectionHandler = ([entry]) => {
    if (!entry.isIntersecting) return;
    setRevealPost(true);
    observer.current.disconnect();
  };

  return (
    <PostContainer ref={observePost} show={revealPost}>
      <PostId ref={observePostId}>{postNum}</PostId>
      <PostTitle>{title}</PostTitle>
      <PostBody>{body}</PostBody>
    </PostContainer>
  );
};

export default SinglePost;
