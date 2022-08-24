import React from "react";
import "./Blog.css";
import Indicator from "../../Assets/Image/indicator.svg";
import { useNavigate } from "react-router-dom";

const Blog = ({ blog }) => {
  const navigate = useNavigate();
  //useNavigate ekta func return kore 
  const { imageURL, title, blog: blogBody, admin, _id } = blog;
  return (
    <div className='blog-container'>
      <div className='blog-image-container'>
        <img src={imageURL} alt='' />
      </div>
      <div className='blog-content'>
        <div>
          <h1>{title}</h1>
          <div className='author-name'>
            <img src={Indicator} alt='' />
            <p>{admin}</p>
          </div>
        </div>
        <p className='blog-preview'>
          {blogBody.length < 400 ? blogBody.length : blogBody.slice(0, 400)}
          <span className='read-more' onClick={() => navigate(`/blog/${_id}`)}>
            {/* navigate('/blog/283')}> */}
            {/* chaile etao kora jae , tohn joto bar read more click korbo differnt pm show hbe and same page ei nibe tai dynamic kora bhalo */}
            ...Read More
            {/* evabe anonymous func na diye drect call kore dile page ta load hobar sathe sathe func ta render hye jabe  */}
            {/* kono link,custom link, navlink use na kore ekta btn er click onujai click ta porar pore click onujai jei path name ta ache shekhane niye jabe sheta korar jnno react router dom er useNavigate import krbo erpr use navigate take call korbo shei useNavigate ta ekta function return korbe shei func take ekta var er modhe rakhbo , erpr ekta btn er on click e ekta anonymous func pathae dibo erpr navigate take call kore dbo erpr call kora shomoy ekta pm pathate hbe ja decide korbe amra actually koi jabo  */}
            {/* id disi mane changeable mane dynamic bhabe change hbe tai ulta palta ekta pm diye run korleo error dibe na  */}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Blog;
