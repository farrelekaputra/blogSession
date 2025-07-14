import React from 'react';
import Dropdown from './dropdown.jsx'
import updateMe from './assets/updateMe.png'

const Navbar = () => {
  return (
    <nav className="bg-white z-50 shadow-md w-full fixed top-0 left-0">
      <div className="max-w-screen-xl mx-auto px-4 md:px-10 py-4 flex justify-between items-center">
        <a href="#" className="flex items-center space-x-3">
          <span className="text-2xl font-semibold text-gray-700">Mini Blog</span>
        </a>
        <div>
          <img src={updateMe} className="w-8 rounded-full" alt="profile" />
        </div>
      </div>
    </nav>
  );
};



export default Navbar;