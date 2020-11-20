import { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";
import PostContainer from "./PostContainer";

const PostContainers = () => {
  const { state } = useContext(GlobalContext);
  let { filteredPosts } = state;

  return filteredPosts.map((post) => (
    <PostContainer
      key={post.id}
      postNum={post.id}
      title={post.title}
      body={post.body}
    />
  ));
};
export default PostContainers;
