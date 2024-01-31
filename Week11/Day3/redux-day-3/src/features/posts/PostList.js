import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "./postsSlice";
import ReactionButtons from "./ReactionButtons";

const PostList = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  const postStatus = useSelector((state) => state.posts.status);
  const error = useSelector((state) => state.posts.error);

    useEffect(() => {
      dispatch(fetchPosts());
    }, []);


  if (postStatus === "loading") return <div>Loading...</div>;

  if (postStatus === "failed") return <div>{error}</div>;

  const renderPosts = posts.map((post) => {
    return (
      <article key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
        <ReactionButtons post={post} />
      </article>
    );
  });

  return (
    <section>
      <h2>Posts</h2>
      {renderPosts}
    </section>
  );
};

export default PostList;
