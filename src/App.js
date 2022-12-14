import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home"
import Videos from './Components/Videos/Videos'
import Login from './Components/Login/Login'
import NotFound from "./Components/NotFound/NotFound";
import BlogDetails from "./Components/BlogDetails/BlogDetails";

export const BlogContext = createContext();

function App() {
  const [blogs, setBlogs] = useState([]);
  console.log(blogs); //tar mane blogs ta app.js theke ashtese
  return (
    <BlogContext.Provider value={[blogs, setBlogs]}>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/videos" element={<Videos></Videos>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/blog/:id" element={<BlogDetails></BlogDetails>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </BlogContext.Provider>
    //empty <> </> er bodole BologContext er modhe shob gulake nilam
  );
}

export default App;
