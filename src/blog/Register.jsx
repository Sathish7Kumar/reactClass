import React, { useState } from "react";
import axios from 'axios'

const Register = () => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const handleRegister = async (e) =>{
    e.preventDefault()
    try {
      await axios.post("http://localhost:4000/register",{
        username,password
      })
      alert("registration successfull")
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <h1>Register User</h1>
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
        <button>Register</button>
        </form>
      </div>
    </>
  );
};

export default Register;
