import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Box, TextField, Button } from "@mui/material";
import { AuthContext } from "../App";

const LoginRegister = ({ page }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [message, setMessage] = useState("");

  const { setToken } = useContext(AuthContext);
  const navigate = useNavigate();

  const BaseUrl = process.env.REACT_APP_BASE_URL;

  const loginregister = async () => {
    const url = `${BaseUrl}/users/${page.toLowerCase()}`;
    if (page === "Login") {
      try {
        const response = await axios.post(url, { email, password });
        if (response.status === 200) {
          setToken(response.data);
          setMessage("");
          navigate("/");
        }
      } catch (error) {
        console.log(error);
        setMessage(error.response.data.msg); // msg from the server
      }
    } else {
      try {
        const response = await axios.post(url, { email, password });
        if (response.status === 200) {
          setMessage("");
          navigate("/login");
        }
      } catch (error) {
        console.log(error);
        setMessage(error.response.data.msg); // msg from the server
      }
    }
  };

  return (
    <div>
      <h1>{page}</h1>
      <Box component={"form"} sx={{ m: 1 }} noValidate autoComplete='off'>
        <TextField
          sx={{ m: 1 }}
          id='email'
          type='email'
          label='Please enter your email'
          variant='outlined'
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          sx={{ m: 1 }}
          id='password'
          type='password'
          label='Please enter your password'
          variant='outlined'
          onChange={(e) => setPassword(e.target.value)}
        />
      </Box>
      <Button variant='contained' onClick={loginregister}>
        {page}
      </Button>
      <div>{message}</div>
    </div>
  );
};

export default LoginRegister;
