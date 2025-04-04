import { useState, useEffect, useRef } from 'react';
import TableSkeleton from '../TableSkeleton';
import ConstrainedMovementAnimation from '../ConstrainedMovementAnimation';
import Marquee from '../Marquee';
import "../../index.css";
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

const Section1 = () => {
  const [numColumns, setNumColumns] = useState(17);
  const [numRows, setNumRows] = useState(16);
  const buttonRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Register ScrollToPlugin
  useEffect(() => {
    gsap.registerPlugin(ScrollToPlugin);
  }, []);

  // Handle cursor movement for button
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!buttonRef.current) return;
      
      // Calculate movement based on cursor position
      // Using a more direct approach with state updates
      const x = (e.clientX / window.innerWidth) * 30 - 15; // Range: -15px to 15px
      const y = (e.clientY / window.innerHeight) * 30 - 15; // Range: -15px to 15px
      
      setPosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Apply the position to the button using inline style
  useEffect(() => {
    if (buttonRef.current) {
      buttonRef.current.style.transform = `translate(${position.x}px, ${position.y}px)`;
    }
  }, [position]);

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
              className="bg-black bg-opacity-50 border border-white text-white hover:border-[#6b6b6b] hover:bg-white hover:text-black font-geist-light py-2 px-8 rounded-full transition-colors duration-300 animate-pulse-custom"
              style={{ transition: 'transform 0.1s linear' }}
            >
              Contact Me
            </button>
          </div>
        </div>
    </section>
  )
}

export default Section1
