import { useSelector, useDispatch } from "react-redux";
import { useEffect, useRef } from "react";
import { fetchUsers, adduser,addUserPrepare } from "./usersSlice";
import { filterAuthor } from "../posts/postsSlice";
const Users = (props) => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const userNameRef = useRef();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div>
      {/* <h2>Authors</h2>
      <div>
        <input ref={userNameRef} />
        <button onClick={() => dispatch(adduser(userNameRef.current?.value))}>
          Add Author
        </button>
      </div> */}
      <select onChange={(e)=>dispatch(filterAuthor(e.target.value))}>
        <option value={-1}>Select Author</option>
        {users.map((user) => {
          return (
            <option value={user.id} key={user.id}>
              {user.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};
export default Users;
