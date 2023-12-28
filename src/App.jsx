// App.js
import React, { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import { FaArrowTurnDown } from 'react-icons/fa6';
import Navbar from './components/Navbar';
import Section1 from './components/sections/Section1';
import Section2 from './components/sections/Section2';
import Section3 from './components/sections/Section3';
import TableSkeleton from './components/TableSkeleton';
import './index.css'; // Import your global styles

const App = () => {
  useEffect(() => {
    const lenis = new Lenis();
    lenis.on('scroll', (e) => {
      console.log(e);
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className='bg-[#060606] font-geist-regular text-[#e6e6e6]'>
      <Navbar />
      <Section1 />
      <Section2 />
      <Section3 />
      <section className='mx-20 relative'>
        <h2 className='flex text-4xl mb-6 mt-4 font-geist-light'>
          <FaArrowTurnDown className='mr-2 mt-2 font-light text-3xl' /> About Me
        </h2>
        <hr />
        <TableSkeleton numCoulmns={9} numRows={1} cl='' cd='absolute -mt-7' />
        <div className='flex'>
          <h2>{/* Your content goes here */}</h2>
        </div>
      </section>
    </div>
  );
};

export default App;
