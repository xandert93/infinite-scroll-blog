import PostContainer from "./PostContainer";

const PostContainers = ({ filteredPosts }) =>
  filteredPosts.map((post) => (
    <PostContainer
      key={post.id}
      postNum={post.id}
      title={post.title}
      body={post.body}
    />
  ));

export default PostContainers;
