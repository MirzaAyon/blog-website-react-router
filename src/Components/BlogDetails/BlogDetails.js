import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import "./BlogDetails.css";
import { BsChevronLeft } from "react-icons/bs";
import { BlogContext } from "../../App";

const BlogDetails = () => {
  //use params object return kore jekhane shob gula pm set kora thake  
  // const param = useParams();
  // console(param); //object show
  // console(param.id); //id show
  //show more e click korle inspact e id ta show hbe 
  //:id na diye :key dile key show hbe 
  //easiest way holo destructuring kore dewa 

  const { id } = useParams();
  // console.log(id); //id pabe inspact e 
  const navigate = useNavigate();
  // const [blog, setBlog] = useState({});
  // console.log(blog); //readmore e click korle ekta block shw hbe 
  // useEffect(() => {
  //   fetch(`https://retro-tech-talks.herokuapp.com/getBlog/${id}`)
  //     .then(res => res.json())
  //     .then(data => setBlog(data))
  //   //ami janina data ta ki hishebe dichche tai console log korbo and shei onujai useState e empty obj or array dibo
  // }, [id]);
  //dynamic erkhetre dependancy te id dibo ba jekono dependency dbo
  const [blogs] = useContext(BlogContext);
  console.log(blogs);

  const blog = blogs.find(blog => blog._id === id)
  console.log(blog);
  return (
    <>
      <div className='header-gradient' />
      {/* <h1>THIS is Blog Details {id}</h1> */}
      <div>
        {/* <button className='back-button' onClick={() => navigate('/')} > */}
        <button className='back-button' onClick={() => navigate(-1)} >
          {/* evabe -1 dileo hbe abr '/' dileo hbe tahole ager page e niye jabe othoba home e niye jabe  */}
          <BsChevronLeft />
          <p>Back</p>
        </button>
        <div className='blog-details'>
          <div className='blog-image'>
            <img src={blog?.imageURL} alt='' />
          </div>
          <h1>{blog?.title}</h1>
          <p>{blog?.blog}</p>
        </div>
      </div>
    </>
  );
};

export default BlogDetails;
