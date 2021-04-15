import React from 'react';

const SinglePost = ({ title, body, postNum }) => (
  <div className="post">
    <div className="post__id">{postNum}</div>
    <div className="post__title">{title}</div>
    <div className="post__body">{body}</div>
  </div>
);

export default SinglePost;
