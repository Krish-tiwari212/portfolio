import React, { useState, useEffect } from 'react';
import { TbMenu } from "react-icons/tb";
import { RxCross1 } from "react-icons/rx";
import Lenis from '@studio-freight/lenis';

const Navbar = () => {
  const navItems = {
    'Resume': '#',
    'About': '#about',
    'LinkedIn': 'https://www.linkedin.com/in/krish-tiwari',
    'Contact': '#'
  };
  const [isOpen, setIsOpen] = useState(false);
  const lenis = new Lenis();

  useEffect(() => {
    // Initialize Lenis and set up the scroll event
    lenis.on('scroll', (e) => {
      // Handle scroll event if needed
      console.log(e);
    });

    // Request animation frame for smooth scrolling
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Clean up on component unmount
    return () => {
      lenis.destroy();
    }
  }, []);

  const handleNavItemClick = (event) => {
    const targetId = event.target.getAttribute('href');
    if (targetId.startsWith('#')) {
      event.preventDefault();
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        lenis.scrollTo(targetElement, { duration: 8 });
      }
    }
  };

  return (
    <div className='z-20 sm:ml-[5rem] sticky top-0'>
      <nav className='w-[100vw] -mt-[1.3rem] pb-6 sm:-ml-[5rem] flex justify-between backdrop-blur-lg bg-opacity-80'>
        <h3 className='sm:ml-[4rem] lg:ml-[10rem] ml-6 mt-[1.3rem]'>Full Stack Developer <span className='text-xl tracking-[-0.1em]'>---</span> Krish</h3>
        <button className='sm:hidden pr-5' onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <RxCross1 className="text-2xl" /> : <TbMenu className="text-2xl mt-6" />}
        </button>
        <ul className={`flex flex-col space-y-4 mt-[1.6rem] -mr-[9vw] sm:mr-[4rem] lg:mr-[10rem] font-geist-light text-[0.9em] text-[#8a7979] ${isOpen ? 'block' : 'hidden'} sm:flex sm:space-y-0 sm:space-x-6 sm:flex-row`}>
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