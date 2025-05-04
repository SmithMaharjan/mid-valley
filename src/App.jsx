import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import EnquiryForm from './pages/EnquiryForm';
import Aboutus from './pages/Aboutus';
import PTE from './pages/PTE';
import BHM from './pages/BHM';
import BIT from './pages/BIT';


const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/EnquiryForm" element={<EnquiryForm />} />
      <Route path="/Aboutus" element={<Aboutus/>} />
      <Route path="/PTE" element={<PTE />} />
      <Route path="/BHM" element={<BHM />} />
      <Route path="/BIT" element={<BIT />} />
  
    </Routes>
   
    </>
  );
};

export default App;
