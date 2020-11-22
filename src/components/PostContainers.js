import { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";
import PostContainer from "./PostContainer";

const PostContainers = () => {
  const { state } = useContext(GlobalContext);
  let { filteredPosts } = state;

  return filteredPosts.map(({ id, title, body }) => (
    <PostContainer key={id} postNum={id} title={title} body={body} />
  ));
};
export default PostContainers;
