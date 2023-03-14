import { useState } from 'react'
import {Routes,Route,BrowserRouter as Router,Link} from "react-router-dom"
import Home from "./Pages/Home/Home"
import About from "./Pages/About/About"
import Gallery from "./Pages/Gallery/Gallery"
import "./App.css"
import Navbar from "./Navbar"
import Footer from "./Footer"

import './App.css'

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
          <Route path='/' exact element={<Home/>}></Route>
          <Route path='/gallery' element={<Gallery/>}></Route>
          <Route path='/about' element={<About/>}></Route>
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
