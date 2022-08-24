import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { createContext } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home"
import Videos from './Components/Videos/Videos'
import Login from './Components/Login/Login'
import NotFound from "./Components/NotFound/NotFound";

export const BlogContext = createContext();

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/videos" element={<Videos></Videos>}></Route>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path="*" element={<NotFound></NotFound>}></Route>
    </Routes>
  );
}

export default App;
