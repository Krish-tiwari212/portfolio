import React from 'react';
import TableSkeleton from '../TableSkeleton';
import asterisk from "../../assets/images/asterisk.svg";
import { motion } from 'framer-motion';
import scroll from '../../assets/images/Scroll.png';


const Section2 = () => {
  return (
    <section className='h-[60vh] sm:h-[65vh] -mt-6 mx-2 sm:mx-20  relative'>
        <TableSkeleton numCoulmns={9} numRows={1} cl="h-[55vh] sm:h-[60vh]" cd= ""/>
        <h2 className='sm:px-[2vw] px-[1vw] text-center top-[6vh] sm:top-[14vh] absolute font-geist-regular text-5xl md:text-6xl sm:text-5xl'>Full Stack Developer committed to crafting elegant solutions and experience</h2>
        <div className='flex'>
          <h3 className='absolute bg-[#060606] text-center z-10 sm:right-[18vh] right-[11vh] top-[48vh] sm:top-[50vh] text-lg '>Open to Work <br /> <span className='text-[1rem] text-[#8a7979] '>Based in India</span></h3>
          <motion.img
            className='absolute z-10 top-[49.5vh] right-[7vh] sm:top-[51.5vh] sm:right-[13vh]'
            src={asterisk}
            alt='Spinning Asterisk'
            animate={{ rotate: 360 }}
            transition={{ ease: "linear", duration: 2, repeat: Infinity }}
          />        
        </div>
        <motion.img
            className='absolute z-10 top-[45vh] left-[8vh] sm:top-[45vh] sm:left-[16vh] w-[6rem] sm:w-[8rem]'
            src={scroll}
            alt='Spinning text'
            animate={{ rotate: 360 }}
            transition={{ ease: "linear", duration: 7, repeat: Infinity }}
          />
          <motion.img
            className='absolute z-10 w-5 left-[13vh] top-[49.5vh] sm:top-[51vh] sm:left-[22.1vh]'
            src={asterisk}
            alt='Spinning Asterisk'
            animate={{ rotate: -360 }}
            transition={{ ease: "linear", duration: 5, repeat: Infinity }}
          />      
    </section>
  )
}

export default Section2