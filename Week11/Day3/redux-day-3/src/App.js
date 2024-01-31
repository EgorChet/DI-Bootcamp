import Users from "./features/users/Users";
import PostList from "./features/posts/PostList";
import AddPostForm from "./features/posts/AddPostForm";
import "./App.css";

function App() {
  return (
    <div className='App'>
      <AddPostForm />
      <Users />
      <PostList />
    </div>
  );
}

export default App;
