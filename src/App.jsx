import { Routes, Route } from 'react-router-dom';
import { useState } from 'react'
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
        <Route path='/' element={<Home />}></Route>
        <Route path='/About' element={<About />}></Route>
        <Route path='/Skills' element={<Skills />}></Route>
        <Route path='/Projects' element={<Projects />} ></Route>
        <Route path='/Resume' element={<Resume />} ></Route>
        <Route path='/Contact' element={<Contact />} ></Route>
      </Routes>


    </div>


  )
}

export default App
