import { Menu } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.png';

function Header() {
  const [header, setHeader] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    const scrollYPos = window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    });
    return () => window.removeEventListener('scroll', scrollYPos);
  });

  return (
    <header className={`sticky mx-auto top-0 z-30 bg-orange-100 border-2 border-orange-200 transition-all ${header ? 'py-4 bg-orange-100 shadow-lg' : 'py-6'}`}>
      <div className="max-w-7xl mx-auto">
        
        {/* MobileNav */}
        <div className='flex md:hidden justify-between px-4'>
          <div className="text-primary flex gap-1 items-center">
            <img src={logo} width={40} height={40} alt='' />
            <h1 className='text-gray-700 font-bold text-xl'>
              Ayam
              <span className="text-red-500 font-semibold">Jatinangor</span>
            </h1>
          </div>
          <div className='flex gap-8'>
            <button className='' onClick={() => setMobileNavOpen(prev => !prev)}>
              <Menu className='' />
            </button>
          </div>
        </div>
        {mobileNavOpen && (
          <ul 
            onClick={() => setMobileNavOpen(false)}
            className='md:hidden p-4 bg-orange-100 rounded-lg font-semibold text-xl mt-2 flex flex-col gap-2 text-center'>
            <li><a href="#hero">Home</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#service">Service</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact" className="bg-red-500 text-white px-4 py-2 rounded-lg">Contact</a></li>
          </ul>
        )}

        {/* ComputerNav */}
        <div className='hidden md:flex justify-between items-center px-10'>
          <div className="text-primary font-semibold flex gap-1 items-center">
            <img src={logo} className='w-10'/>
            <div className='text-gray-700 text-xl font-bold'>
              Ayam
              <span className="text-red-500 font-semibold">Jatinangor</span>
            </div>
          </div>
          <div className='flex items-center gap-x-6'>

            {/* Nav */}
            <ul className="flex items-center cursor-pointer gap-8 text-black font-semibold">
              <li><a href="#hero" className="hover:text-red-500 transition-all">Home</a></li>
              <li><a href="#menu" className="hover:text-red-500 transition-all">Menu</a></li>
              <li><a href="#service" className="hover:text-red-500 transition-all">Service</a></li>
              <li><a href="#about" className="hover:text-red-500 transition-all">About</a></li>
              <li><a href="#contact" className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-all">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
