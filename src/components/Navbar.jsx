import React, { useState } from 'react';
import { TbMenu } from "react-icons/tb";
import { RxCross1 } from "react-icons/rx";
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

const Navbar = () => {
  const navItems = {
    'Resume': 'https://drive.google.com/file/d/1AErwhAIicSi22zNrgfNvNTnM82tRDqSh/view?usp=sharing',
    'About': '#about',
    'LinkedIn': 'https://www.linkedin.com/in/krish-tiwari',
    'Contact': '#contact'
  };
  const [isOpen, setIsOpen] = useState(false);

const handleNavItemClick = (event) => {
  const targetId = event.target.getAttribute('href');
  if (targetId.startsWith('#')) {
    event.preventDefault();
    setIsOpen(false);
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      gsap.to(window, { duration: 2, scrollTo: targetElement, ease: "spring" });
    }      
  }
};

  return (
    <div className='z-20 sm:ml-[5rem] sticky top-0'>
      <div className={`fixed inset-0 ${isOpen ? 'block' : 'hidden'} bg-black bg-opacity-50 backdrop-blur-lg`}>
        <nav className='w-full h-full flex items-center justify-center'>
          <ul className='text-white space-y-8 text-2xl'>
            {Object.entries(navItems).map(([item, url], index) => (
              <li key={index} className='hover:text-[#e6e6e6]'>
                <a href={url} onClick={handleNavItemClick}>{item}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <nav className='w-[100vw] -mt-[1.3rem] pb-6 sm:-ml-[5rem] flex justify-between backdrop-blur-lg bg-opacity-80'>
        <h3 className='sm:ml-[4rem] lg:ml-[10rem] ml-6 mt-[1.3rem]'>Full Stack Developer <span className='text-xl tracking-[-0.1em]'>---</span> Krish</h3>
        <button className='sm:hidden pr-5' onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <RxCross1 className="text-2xl mt-6" /> : <TbMenu className="text-2xl mt-6" />}
        </button>
        <ul className={`hidden text-[#707070] sm:text-sm sm:mt-7 sm:mr-[8vw] sm:flex sm:space-y-0 sm:space-x-6 sm:flex-row`}>
          {Object.entries(navItems).map(([item, url], index) => (
            <li key={index} className='hover:text-[#e6e6e6]'>
              <a href={url} onClick={handleNavItemClick}>{item}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default Navbar;