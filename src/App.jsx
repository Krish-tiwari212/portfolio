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
import real_me from './assets/images/real_me_1.png';

const App = () => {
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.05 });
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
      <section className='mx-2 sm:mx-20 lg:mx-40 relative'>
        <h2 className='flex text-[5vh] font-bold pb-2 mt-7 font-geist-light'>
          <FaArrowTurnDown className='mt-3 font-light text-[4vh]' /> About
        </h2>
        <hr/>
        <TableSkeleton numCoulmns={9} numRows={1} cl='' cd='absolute -mt-7 h-[175vh] sm:h-[130vh] lg:h-[90vh]' />
        <div className='h-[175vh] sm:h-[131vh] lg:h-[90vh] lg:flex'>
          <div className='-mt-12 lg:right-0 cont lg:order-2 lg:absolute h-[80vh] lg:w-[35vw]'>
            <img src={real_me} alt="" srcset="" className='grayscale object-cover object-center w-full h-full' />
          </div>
          <div className='lg:order-1 pt-5 lg:pt-10 lg:pr-10 absolute lg:static md:mt-6 lg:w-1/2'>
            <h2 className='lg:text-[2.5rem] text-[2rem]  sm:text-4xl leading-[2.7rem] z-[100]'>
              Hi, I'm Krish! a dedicated Full Stack Developer, seamlessly weaving the art of coding with a passion for fitness and the exacting precision of culinary craftsmanship. Embark on this journey with me, where technology meets well-being.          
            </h2>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
