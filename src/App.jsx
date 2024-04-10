import "./App.css";
import { BrowserRouter, Routes, Route, useNavigate, Link } from "react-router-dom";
import React, { useState } from "react";

const users = [
  { username: "satz", password: "12345" },
  { username: "sachin", password: "2510" },
];

const App = () => {
  const [isLogin, setisLogin] = useState(false);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<LoginPage isLogin={isLogin} setisLogin={setisLogin} />}
          />
          <Route
            path="/home"
            element={<HomePage isLogin={isLogin} setisLogin={setisLogin} />}
          />
          <Route
            path="/Register"
            element={<Register />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

const LoginPage = ({ isLogin, setisLogin }) => {

  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [error, seterror] = useState('')

  const nav = useNavigate();

  const handleLogin = () => {

    const user = users.find(
      (x) => x.username === username && x.password === password
    );

    if (user) {
      setisLogin(true);
      nav("/home");
    }else{
      seterror("invalid username or password")
    }
  };

  return (
    <>
      <h1>Login Page</h1>
      <input
        type="text"
        value={username}
        onChange={(e) => setusername(e.target.value)}
        placeholder="enter username"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setpassword(e.target.value)}
        placeholder="enter password"
        required
      />
      <button onClick={handleLogin}>Login</button>
      <p>{error}</p>
      <p>Don't have an account </p>
      <Link to='/register'>Register</Link>
    </>
  );
};

const HomePage = ({ isLogin, setisLogin }) => {
  const nav = useNavigate();
  const handleLogout = () => {
    setisLogin(false);
    nav("/");
  };
  return (
    <>
      <h1>Welcome User !</h1>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
};


const Register = () => {
  const handleRegister = () =>{
    alert("Registration Successfull")
  }
  return (
    <>
    <h1>Register Page</h1>
      <input
        type="text"
        placeholder="enter username"
        required
      />
      <input
        type="password"
        placeholder="enter password"
        required
      />
      <button onClick={handleRegister}>Register</button>
      <p>Already having an account </p><Link to='/'>Login</Link>
    </>
  )
}


