import { useState, useEffect, useRef } from 'react';
import TableSkeleton from '../TableSkeleton';
import ConstrainedMovementAnimation from '../ConstrainedMovementAnimation';
import Marquee from '../Marquee';
import "../../index.css";
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { useGSAP } from '@gsap/react';

const Section1 = () => {
  const [numColumns, setNumColumns] = useState(17);
  const [numRows, setNumRows] = useState(16);
  const buttonRef = useRef(null);

  useGSAP(() => {
    // Register ScrollToPlugin
    gsap.registerPlugin(ScrollToPlugin);
    
    // Add cursor movement effect to button
    const updateButtonPosition = (e) => {
      if (!buttonRef.current) return;
      
      const moveX = (e.clientX - window.innerWidth / 2) / 50;
      const moveY = (e.clientY - window.innerHeight / 2) / 50;
      
      gsap.to(buttonRef.current, {
        x: moveX,
        y: moveY,
        duration: 0.5,
        ease: "power2.out"
      });
    };

    window.addEventListener('mousemove', updateButtonPosition);

    return () => {
      window.removeEventListener('mousemove', updateButtonPosition);
    };
  }, []);

  useEffect(() => {
    // Adjust the number of columns and rows based on the screen width
    if (window.innerWidth <= 768) { // 768px is typically the width for mobile devices
      setNumColumns(10);
      setNumRows(20);
    }
  }, []);

  const scrollToContact = () => {
    // Scroll to the contact section (assuming it's Section6)
    gsap.to(window, {
      duration: 1,
      scrollTo: { y: "#contact", offsetY: 50 },
      ease: "power2.inOut"
    });
  };

  return (
    <section className='h-[100vh] px-2 lg:px-40 sm:px-20 pt-4 -mt-4 cont relative border-[#6b6b6b] border-b-[1px]'>
        <div>
          <TableSkeleton numCoulmns={numColumns} numRows={numRows}/>
          <ConstrainedMovementAnimation />
          <Marquee />
          <div className="absolute bottom-16 left-0 right-0 z-30 flex justify-center">
            <button 
              ref={buttonRef}
              onClick={scrollToContact}
              className="bg-transparent border border-white text-white hover:bg-white hover:text-black font-geist-light py-2 px-8 rounded-full transform transition-all duration-300 animate-pulse-custom"
            >
              Contact Me
            </button>
          </div>
        </div>
    </section>
  )
}

export default Section1
