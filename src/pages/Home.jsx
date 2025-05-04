import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center gap-4 text-3xl">
      <Link to="/EnquiryForm" className="bg-green-500 px-6 py-3 rounded">EnquiryForm</Link>
      <Link to="/Aboutus" className="bg-green-500 px-6 py-3 rounded">Aboutus</Link>
      <Link to="/PTE" className="bg-green-500 px-6 py-3 rounded">PTE</Link>
      <Link to="/BHM" className="bg-green-500 px-6 py-3 rounded">BHM</Link>
      <Link to="/BIT" className="bg-green-500 px-6 py-3 rounded">BIT</Link>
    </div>
  );
};

export default Home;
