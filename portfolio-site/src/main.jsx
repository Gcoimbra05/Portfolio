import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/home";
import Curriculum from "./components/curriculo/curriculo";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/curriculo" element={<Curriculum/>}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);