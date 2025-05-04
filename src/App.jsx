
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Service from './pages/Service'
import Contact from './pages/Contact'
import Navbar from './component/Navbar'

import EnquiryForm from './pages/EnquiryForm';
import Aboutus from './pages/Aboutus';
import PTE from './pages/PTE';
import BHM from './pages/BHM';
import BIT from './pages/BIT';

function App() {

  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/service' element={<Service />}></Route>
        <Route path='/contact-us' element={<Contact />}></Route>
      <Route path="/EnquiryForm" element={<EnquiryForm />} />
      <Route path="/Aboutus" element={<Aboutus/>} />
      <Route path="/PTE" element={<PTE />} />
      <Route path="/BHM" element={<BHM />} />
      <Route path="/BIT" element={<BIT />} />

      </Routes>

    </>
  )
}

export default App
