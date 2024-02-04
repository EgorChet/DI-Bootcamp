import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../App";

const Home = (props) => {
  const [users, setUsers] = useState([]);
  const { token } = useContext(AuthContext);

  const BaseUrl = process.env.REACT_APP_BASE_URL;

  //   console.log(token.token); this is our token from headers we could not get it from cookies

  useEffect(() => {
    getusers();
  }, []);

  const getusers = async () => {
    const url = `${BaseUrl}/users/`;
    try {
      const response = await axios.get(url, {
        headers: {
          "x-access-token": token.token,
        },
      });
      if (response.status === 200) setUsers(response.data);
    } catch (error) {}
  };

  return (
    <>
      <h1> Home Page</h1>
      {users.map((user) => {
        return <div key={user.id}>{user.email}</div>;
      })}
    </>
  );
};

export default Home;
