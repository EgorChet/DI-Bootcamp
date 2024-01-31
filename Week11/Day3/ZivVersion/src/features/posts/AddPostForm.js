import { useState } from "react";
import { useDispatch } from "react-redux";
import { addpost } from "./postsSlice";

const AddPostForm = (props) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();

  const savePost = (e) => {
    e.preventDefault();
    dispatch(addpost(title, content));
    setContent("");
    setTitle("");
  };

  return (
    <section>
      <h2>Add Post</h2>
      <form onSubmit={savePost}>
        <label htmlFor='postTitle'>Post Title</label>
        <input
          name='postTitle'
          type='text'
          id='postTitle'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label htmlFor='postContent'>Post Content</label>
        <input
          name='postContent'
          type='text'
          id='postContent'
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <input type='submit' value='Save' />
      </form>
    </section>
  );
};
export default AddPostForm;
