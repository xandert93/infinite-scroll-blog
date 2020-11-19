import React from "react";

function PostContainer({ title, body, postNum }) {
  return (
    <div className="post-container">
      <div className="post-id">{postNum}</div>
      <div className="post-title">{title}</div>
      <div className="post-body">{body}</div>
    </div>
  );
}

export default PostContainer;
