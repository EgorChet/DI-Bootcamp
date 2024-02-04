import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../App";
import { useNavigate } from "react-router-dom";

const Auth = (props) => {
  const { token } = useContext(AuthContext);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    verify();
  }, []);

  const verify = async () => {
    try {
      const response = await axios.get("http://localhost:3001/users/verify", {
        headers: {
          "x-access-token": token?.token,
        },
      });
      if (response.status === 200) setRedirect(true);
    } catch (error) {
      setRedirect(false);
    }
  };
  return redirect ? props.children : <>not authorized</>;
};

export default Auth;
