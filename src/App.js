import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { createContext } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home"

export const BlogContext = createContext();

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
    </Routes>
  );
}

export default App;
