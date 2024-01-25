import postsData from "./posts.json";

const PostList = () => {
  return (
    <div>
      {postsData.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default PostList;
