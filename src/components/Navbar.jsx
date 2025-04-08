import { useState, forwardRef } from 'react';
import { TbMenu } from "react-icons/tb";
import { RxCross1 } from "react-icons/rx";
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

const Navbar = forwardRef((props, ref) => {
  const navItems = {
    'Resume': 'https://drive.google.com/file/d/1tU6ey4BqzD4QTThLE4oLYJ82IO4p65cQ/view?usp=sharing',
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
    <div ref={ref} className='z-20 sm:ml-[5rem] sticky top-0'>
      {/* Mobile menu overlay */}
      <div className={`fixed inset-0 ${isOpen ? 'block' : 'hidden'} bg-black bg-opacity-50 backdrop-blur-lg z-50`}>
        <nav className='w-full h-full flex items-center justify-center'>
          <ul className='text-white space-y-8 text-2xl'>
            {Object.entries(navItems).map(([item, url], index) => (
              <li key={index} className='hover:text-[#e6e6e6]'>
                <a href={url} onClick={handleNavItemClick} target={url.startsWith('#') ? '' : '_blank'} rel={url.startsWith('#') ? '' : 'noopener noreferrer'}>{item}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      
      {/* Navbar */}
      <nav className='w-[100vw] -mt-[1.3rem] pb-6 sm:-ml-[5rem] flex justify-between backdrop-blur-lg bg-opacity-80 relative z-30'>
        <h3 className='sm:ml-[4rem] lg:ml-[10rem] ml-6 mt-[1.3rem]'>Full Stack Developer <span className='text-xl tracking-[-0.1em]'>---</span> Krish</h3>
        
        {/* Mobile menu button - always on top */}
        <button 
          className='sm:hidden pr-5 relative z-[60]' 
          onClick={() => setIsOpen(!isOpen)}
          style={{ color: isOpen ? 'white' : 'inherit' }}
        >
          {isOpen ? 
            <RxCross1 className="text-2xl mt-6" /> : 
            <TbMenu className="text-2xl mt-6" />
          }
        </button>
        <ul className={`hidden text-[#707070] sm:text-sm sm:mt-7 sm:mr-[8vw] sm:flex sm:space-y-0 sm:space-x-6 sm:flex-row`}>
          {Object.entries(navItems).map(([item, url], index) => (
            <li key={index} className='hover:text-[#e6e6e6]'>
              <a href={url} onClick={handleNavItemClick} target={url.startsWith('#') ? '' : '_blank'} rel={url.startsWith('#') ? '' : 'noopener noreferrer'}>{item}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
});

// Add display name for the forwardRef component
Navbar.displayName = 'Navbar';

export default Navbar;
