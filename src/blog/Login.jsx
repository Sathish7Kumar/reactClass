import React, { useState } from "react";
import axios from 'axios'
import {useCookies} from 'react-cookie'

const Login = () => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const[cookie,setCookie] = useCookies(['access_token']);
  const handleRegister = async (e) =>{
    e.preventDefault()
    try {
      const result = await axios.post("http://localhost:4000/login",{
        username,password
      })
      console.log(result);
      alert("login successfull")
      setCookie("access_token",result.data.token)
      window.localStorage.setItem("userID",result.data.userId)
      window.localStorage.setItem("token",result.data.token)
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <h1>Login User</h1>
      <div>
        <form onSubmit={handleRegister}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          value={username}
          onChange={(e) => setusername(e.target.value)}
          placeholder="Enter ur Username"
          required
          type="text"
        />
        <br /> <br />
        <label htmlFor="password">Password</label>
        <input
          value={password}
          id="password"
          onChange={(e) => setpassword(e.target.value)}
          placeholder="Enter ur password"
          required
          type="password"
        />
        <br /> <br />
        <button>Login</button>
        </form>
      </div>
    </>
  );
};

export default Login;
