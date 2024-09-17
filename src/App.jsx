import React, { useEffect, useState, useRef } from 'react';
import Lenis from '@studio-freight/lenis';
import Navbar from './components/Navbar';
import Section1 from './components/sections/Section1';
import Section2 from './components/sections/Section2';
import Section3 from './components/sections/Section3';
import './index.css'; 
import Section4 from './components/sections/Section4';
import Section5 from './components/sections/Section5';
import Section6 from './components/sections/Section6';
import gsap from "gsap";

const App = () => {
  const size = 30;
  const circle = useRef();
  const mouse = useRef({ x: 0, y: 0 });
  const delayedMouse = useRef({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    mouse.current = { x: e.clientX, y: e.clientY };
  };

  const animateCursor = (x, y) => {
    gsap.set(circle.current, { x, y, yPercent: -50, xPercent: -50 });
  };

  const lerp = (x, y, alpha) => x * (1 - alpha) + y * alpha;

  const animation = () => {
    const { x, y } = delayedMouse.current;
    delayedMouse.current = {
      x: lerp(x, mouse.current.x, 0.075),
      y: lerp(y, mouse.current.y, 0.075), // Corrected this line
    };
    animateCursor(delayedMouse.current.x, delayedMouse.current.y);
    window.requestAnimationFrame(animation);
  };

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    function handleLoad() {
      setIsLoading(false);
    }
    animation();
    window.addEventListener("mousemove", handleMouseMove);

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      document.addEventListener('readystatechange', () => {
        if (document.readyState === 'complete') {
          handleLoad();
        }
      });
    }

    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      document.removeEventListener('readystatechange', handleLoad);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  if (isLoading) {
    return (
      <div className='w-full h-[100vh] bg-[#060606] text-white grid grid-cols-1 grid-rows-1 place-items-center'>
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-arrow-repeat animate-spin" viewBox="0 0 16 16">
          <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"/>
          <path fill-rule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"/>
        </svg>
      </div>
    );
  }

  return (
    <>
      <div ref={circle} className='w-[30px] h-[30px] bg-[#f1f1f1] rounded-full fixed z-50 pointer-events-none'></div>
      <div className='bg-[#060606] font-geist-regular text-[#e6e6e6]'>
        <Navbar />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
      </div>
    </>
  );
};

export default App;