import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../Assets/Image/logo.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className='logo-container'>
        <img src={Logo} alt='' />
      </div>
      <div className='link-container'>
        <NavLink className="link" to='/'>Home</NavLink>
        <NavLink className="link" to='/login'>Login</NavLink>
        <NavLink className="link" to='/videos'>Videos</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
