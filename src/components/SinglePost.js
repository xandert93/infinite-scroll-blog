import React, { useCallback, useRef, useState } from 'react';
import styled from 'styled-components';

let SinglePost = ({
  post: { title, body, id: postNum },
  observePost,
  className,
}) => {
  const [revealPost, setRevealPost] = useState(false);

  const observer = useRef();

  const observePostId = useCallback((node) => {
    if (!node) return;
    observer.current = new IntersectionObserver(intersectionHandler, {
      threshold: 0.5,
    });
    observer.current.observe(node);
  }, []);

  const intersectionHandler = ([entry]) => {
    if (!entry.isIntersecting) return;
    setRevealPost(true);
    observer.current.disconnect();
  };

  return (
    <div
      ref={observePost}
      className={`${className} ${revealPost ? '' : 'hidden'}`}
    >
      <div ref={observePostId} className="id">
        {postNum}
      </div>
      <div className="title">{title}</div>
      <div className="body">{body}</div>
    </div>
  );
};

export default SinglePost = styled(SinglePost)`
  position: relative;
  width: 95%;
  padding: 1.6rem;
  border-radius: var(--bord-rad-sm);
  background: rgba(0, 90, 225, 0.193);
  box-shadow: var(--box-shad-sm);
  transition: opacity 1.5s, transform 1.5s;

  & .hidden {
    opacity: 0;
    transform: translateY(100%);
  }

  & .id {
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
  }

  & .title {
    font-size: 1.8rem;
    font-weight: 700;
    text-transform: capitalize;
    font-style: italic;
    padding-bottom: 1.5rem;
  }

  & .body {
    font-size: 1.5rem;
    color: rgba(255, 255, 255, 0.85);
    line-height: 1.7rem;
  }
`;
