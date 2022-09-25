import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import TodoList from "./pages/TodoList/TodoList";
import "./assets/css/style.css"

const App=()=>{
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/todo" element={<TodoList/>}/>
      </Routes>
    </BrowserRouter>
  )
}
export default App