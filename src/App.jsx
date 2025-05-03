import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home'
import Resume from './Pages/Resume'
import About from './Pages/About'
import Skills from './Pages/Skills'
import Projects from './Pages/Projects'
import Contact from './Pages/Contact'
import ProjectCard from './Pages/ProjectCard';

function App() {


  return (

    <div> 
      
      <Navbar /> 
      <Routes>
        <Route path="/Anusha-portfolio" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Resume" element={<Resume />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    
    

    </div>


  )
}

export default App
