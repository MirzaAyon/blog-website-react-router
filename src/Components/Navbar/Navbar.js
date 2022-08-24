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
        <NavLink className={({ isActive }) => isActive ? 'active-link' : 'link'} to='/'>Home</NavLink>
        <NavLink className={({ isActive }) => isActive ? 'active-link' : 'link'} to='/login'>Login</NavLink>
        <NavLink className={({ isActive }) => isActive ? 'active-link' : 'link'} to='/videos'>Videos</NavLink>
        {/* active link er bodole navlink use korlam ja active link er motoe kaj kore  */}
      </div>
    </nav>
  );
};

export default Navbar;
