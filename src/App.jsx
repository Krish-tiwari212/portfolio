// App.js
import React from 'react';
import TableSkeleton from './components/TableSkeleton';
import ConstrainedMovementAnimation from './components/ConstrainedMovementAnimation';
import Marquee from './components/Marquee';
import './index.css';
import asterisk from "./assets/images/asterisk.svg";
import { motion, useScroll, useSpring } from 'framer-motion';
import scroll from './assets/images/Scroll.png';
import Navbar from './components/Navbar';
import StickyScroll from './components/StickyScroll';
import ProjectCard from './components/ProjectCard';

const App = () => {
  return (
    <div className='bg-[#060606] font-geist-regular text-[#e6e6e6]'>
      <section className='h-[100vh] px-20 pt-5 overflow-hidden relative border-[#8a7979] border-b-[1px]'>
        <Navbar />

        <div className='mt-[1.7rem]'>
          <TableSkeleton numCoulmns={17} numRows={16}/>
          <ConstrainedMovementAnimation />
          <Marquee />
        </div>
      </section>
      <section className='h-[80vh] -mt-6 mx-20  relative'>
        <TableSkeleton numCoulmns={9} numRows={1} cl="h-[70vh]" cd= ""/>
        <h2 className='px-[2vw] text-center top-[14vh] absolute font-geist-regular text-6xl'>Full Stack Developer committed to crafting elegant solutions and experience</h2>
        <div className='flex'>
          <h3 className='absolute bg-[#060606] text-center z-10 right-[18vh] top-[56.5vh] text-lg '>Open to Work <br /> <span className='text-[1rem] text-[#8a7979] '>Based in India</span></h3>
          <motion.img
            className='absolute z-10 top-[57.5vh] right-[13vh]'
            src={asterisk}
            alt='Spinning Asterisk'
            animate={{ rotate: 360 }}
            transition={{ ease: "linear", duration: 2, repeat: Infinity }}
          />        
        </div>
        <motion.img
            className='absolute z-10 top-[50vh] left-[18vh] w-[10rem]'
            src={scroll}
            alt='Spinning text'
            animate={{ rotate: 360 }}
            transition={{ ease: "linear", duration: 7, repeat: Infinity }}
          />
          <motion.img
            className='absolute z-10 w-5 top-[57.5vh] left-[25.4vh]'
            src={asterisk}
            alt='Spinning Asterisk'
            animate={{ rotate: -360 }}
            transition={{ ease: "linear", duration: 5, repeat: Infinity }}
          />
          
      </section>
      <ProjectCard />
    </div>
  );
};

export default App;
