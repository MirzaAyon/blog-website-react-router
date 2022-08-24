import React from "react";
import { useParams } from "react-router-dom";

import "./BlogDetails.css";
import { BsChevronLeft } from "react-icons/bs";

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
  return (
    <>
      <div className='header-gradient' />
      <h1>THIS is Blog Details {id}</h1>
      {/* <div>
        <button className='back-button'>
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
      </div> */}
    </>
  );
};

export default BlogDetails;
