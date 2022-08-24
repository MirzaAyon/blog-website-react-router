import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import Logo from "../../Assets/Image/logo.png";
import "./Navbar.css";

const Navbar = () => {
  // const location = useLocation();
  // console.log(location);
  //kothae achi shetar location dibe
  const { pathname } = useLocation();
  //use location amdr ke ekta obj return kore 
  console.log(pathname);
  //console e jei path e achi ta show korbe jemon /,/videos,/login etc
  return (
    <nav style={pathname.includes('blog') ? { display: 'none' } : { display: 'flex' }}>
      {/* includes er kaj holo oi jinish ta ekhane ache kina ta check kora  */}
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
