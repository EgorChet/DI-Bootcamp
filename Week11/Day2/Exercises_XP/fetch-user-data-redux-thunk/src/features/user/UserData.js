// src/features/user/UserData.js
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers, selectUser } from "./userSlice";
import "./UserData.css";

export const UserData = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);
  const selectedUser = useSelector((state) => state.user.selectedUser);
  const status = useSelector((state) => state.user.status);
  const error = useSelector((state) => state.user.error);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchUsers());
    }
  }, [status, dispatch]);

  const handleSelectUser = (e) => {
    const userId = parseInt(e.target.value, 10);
    dispatch(selectUser(userId));
  };

  if (status === "loading") return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className='container my-4'>
      <div className='row justify-content-center'>
        <div className='col-md-6'>
          <select className='form-control mb-3' onChange={handleSelectUser} defaultValue=''>
            <option value='' disabled>
              Select a user
            </option>
            {users.map((user) => (
              <option key={user.id} value={user.id}>
                {user.name}
              </option>
            ))}
          </select>

          {selectedUser && (
            <div className='user-details'>
              <h3>Name</h3>
              <strong style={{ fontSize: 20 }}>{selectedUser.name}</strong>
              <h3 style={{ marginTop: 20 }}>Contact Details</h3>
              <p>
                <strong>Email:</strong> {selectedUser.email}
              </p>
              <p>
                <strong>Phone:</strong> {selectedUser.phone}
              </p>
              <p>
                <strong>Website:</strong> {selectedUser.website}
              </p>
              <h3>Company Details</h3>
              <p>
                <strong>Name:</strong> {selectedUser.company.name}
              </p>
              <p>
                <strong>CatchPhrase:</strong> {selectedUser.company.catchPhrase}
              </p>
              <p>
                <strong>BS:</strong> {selectedUser.company.bs}
              </p>
              <h3>Address</h3>
              <p>
                <strong>Street:</strong> {selectedUser.address.street}
              </p>
              <p>
                <strong>Suite:</strong> {selectedUser.address.suite}
              </p>
              <p>
                <strong>City:</strong> {selectedUser.address.city}
              </p>
              <p>
                <strong>Zipcode:</strong> {selectedUser.address.zipcode}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserData;
