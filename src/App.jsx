// App.js
import React, { useEffect, useState } from 'react';
import Lenis from '@studio-freight/lenis';
import Navbar from './components/Navbar';
import Section1 from './components/sections/Section1';
import Section2 from './components/sections/Section2';
import Section3 from './components/sections/Section3';
import './index.css'; 
import Section4 from './components/sections/Section4';
import Section5 from './components/sections/Section5';
import Section6 from './components/sections/Section6';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    function handleLoad() {
      setIsLoading(false);
    }

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      document.addEventListener('readystatechange', () => {
        if (document.readyState === 'complete') {
          handleLoad();
        }
      });
    }

    const lerpValue = window.innerWidth <= 768 ? 0.2 : 0.05;

    const lenis = new Lenis({ lerp: lerpValue, smoothTouch: true });
    lenis.on('scroll', (e) => {
      console.log(e);
    });

    lenis.on('touch', (e) => {
      console.log(e);
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      document.removeEventListener('readystatechange', handleLoad);
    };
  }, []);

  if (isLoading) {
    return( 
      <div className='w-full h-[100vh] bg-[#060606] text-white grid grid-cols-1 grid-rows-1 place-items-center'>
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-arrow-repeat animate-spin" viewBox="0 0 16 16">
          <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"/>
          <path fill-rule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"/>
        </svg>
      </div>
    );
  }

  return (
    <div className='bg-[#060606] font-geist-regular text-[#e6e6e6]'>
      <Navbar />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
    </div>
  );
};

export default App;
