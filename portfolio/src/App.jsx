import React from 'react'
import Home from './Routes/Home'
import About from './Routes/About'
import Project from './Routes/Project'
import Contact from './Routes/Contact'
import { Routes , Route } from 'react-router-dom'

const App = () => {
  return (
    <>
     <Routes>
       <Route path="/" element={<Home />}/>
       <Route path="/project" element={<Project />}/>
       <Route path="/about" element={<About />}/>
       <Route path="/contact" element={<Contact />}/>
     </Routes>
    </>
  )
}

export default App
