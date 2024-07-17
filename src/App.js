// app.js
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Navbar from './components/navbar';
import Home from './screens/home'; 
import About from "./screens/about"; 
import TechStack from './screens/techstack'; 
import Education from './screens/education'; 
import Projects from './screens/projects'; 


import "./styles.css"; // Correct path to styles.css

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/about" element={<About />} /> 
          <Route path="/tech-stack" element={<TechStack />} /> 
          <Route path="/education" element={<Education />} /> 
          <Route path="/projects" element={<Projects />} />          
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
