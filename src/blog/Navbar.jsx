import React from 'react'
import { useCookies } from 'react-cookie';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [cookies,setCookies]=useCookies(['access_token'])

    const nav = useNavigate()

    const logout = () => {
        setCookies("access_token", "");
        window.localStorage.clear();
        nav("/login");
      };
  return (
    <div>
        <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/createblog'>Create</Link></li>
        <li><Link to='/savedblog'>Saved Blog</Link></li>
        <li><Link to='/register'>Register</Link></li>
        {!cookies.access_token ? (
        <Link to="/login">Login</Link>
      ) : (
        <div>
        <button className="logout-btn" onClick={logout}>Logout</button>
        </div>
      )}
      </ul>
    </nav>
    </div>
  )
}

export default Navbar