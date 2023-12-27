import React, { useState, useEffect } from 'react';
import { TbMenu } from "react-icons/tb";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const navItems = ['Resume', 'About', 'LinkedIn', 'Contact'];
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Calculate the viewport height and set it as a CSS variable
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }, []);

  return (
    <div className='z-20 sm:ml-[5rem] sticky top-0 h-[calc(var(--vh, 5vh) * 200)]'>
      <nav className='w-[100vw] -mt-[1.3rem] pb-4 sm:-ml-[5rem] flex justify-between backdrop-blur-lg bg-opacity-80'>
        <h3 className='sm:ml-[4rem] ml-6 mt-[1.3rem]'>Full Stack Developer <span className='text-xl tracking-[-0.1em]'>---</span> Krish</h3>
        <button className='sm:hidden pr-5' onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <RxCross1 className="text-2xl" /> : <TbMenu className="text-2xl mt-6" />}
        </button>
        <ul className={`flex flex-col space-y-4 mt-[1.6rem] -mr-[9vw] sm:mr-[4rem] font-geist-light text-[0.9em] text-[#8a7979] ${isOpen ? 'block' : 'hidden'} sm:flex sm:space-y-0 sm:space-x-6 sm:flex-row`}>
          {navItems.map((item, index) => (
            <li key={index} className='hover:text-[#e6e6e6]'>
              <a href='#'>{item}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default Navbar;