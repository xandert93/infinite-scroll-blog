import React, { useCallback, useRef, useState } from 'react';

const SinglePost = ({ title, body, postNum, observePost }) => {
  const [revealPost, setRevealPost] = useState(false);

  const observer = useRef();

  const observePostId = useCallback((node) => {
    observer.current = new IntersectionObserver(intersectionHandler);
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
      className={`post ${revealPost ? '' : 'post--hidden'}`}
    >
      <div ref={observePostId} className="post__id">
        {postNum}
      </div>
      <div className="post__title">{title}</div>
      <div className="post__body">{body}</div>
    </div>
  );
};

export default SinglePost;
