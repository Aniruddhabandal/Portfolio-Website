import React from 'react'
import Navbar from './Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../src/Home';
import Resume from '../src/Resume';
import Project from './Project';
import Contact from './Contact';
const App = () => {
  
  return (
    <div>
      <Router>
       <Navbar/>
       <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/project' element={<Project />} />
        <Route path='/contact' element={<Contact />} />
       </Routes>
      </Router>


     
    </div>
    

  )
}

export default App

