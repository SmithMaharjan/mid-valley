import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Service from './pages/Service'
import Contact from './pages/Contact'
import Navbar from './component/Navbar'

function App() {

  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/service' element={<Service />}></Route>
        <Route path='/contact-us' element={<Contact />}></Route>

      </Routes>

    </>
  )
}

export default App
