import React from 'react';
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = ({ sidebar, setSidebar }) => {
  return (
    <div className="absolute top-0 left-0 w-full py-2 text-white z-20">
      <div className='container mx-auto px-4'>
        <div className='flex justify-between items-center py-4'> 
          {/* logo section */}
          <h1 className='text-4xl font-bold uppercase text-white'>
            Orange
            <span className='font-normal text-2xl'>Mint</span>
          </h1>

          {/* Navlink section */}
          <ul className='hidden md:flex space-x-8 text-white'>
            <li>
              <a href="#home" className='hover:text-orange-300 transition-colors cursor-pointer'>
                Home
              </a>
            </li>
            <li>
              <a href="#find" className='hover:text-orange-300 transition-colors cursor-pointer'>
                Where to Find
              </a>
            </li>
            <li>
              <a href="#contact" className='hover:text-orange-300 transition-colors cursor-pointer'>
                Contact
              </a>
            </li>
          </ul>

          {/* Hamburger menu */}
          {/* Hamburger menu */}
<div className="md:hidden lg:block" onClick={() => setSidebar(!sidebar)}>
  <span className='text-3xl cursor-pointer'>☰</span>
</div>
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;