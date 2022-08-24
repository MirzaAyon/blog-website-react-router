import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../Assets/Image/logo.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className='logo-container'>
        <img src={Logo} alt='' />
      </div>
      <div className='link-container'>
        <Link className="link" to='/'>Home</Link>
        <Link className="link" to='/login'>Login</Link>
        <Link className="link" to='/videos'>Videos</Link>
      </div>
    </nav>
  );
};

export default Navbar;
