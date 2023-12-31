import React, { useEffect, useRef } from 'react';
import TableSkeleton from '../TableSkeleton';
import asterisk from "../../assets/images/asterisk.svg";
import { gsap } from 'gsap';
import scroll from '../../assets/images/Scroll.png';
import { useGSAP } from '@gsap/react';


const Section2 = () => {
  const asteriskRef = useRef(null);
  const scrollRef = useRef(null);

  useGSAP(() => {
    gsap.to(asteriskRef.current, {
      rotation: 360,
      repeat: -1,
      ease: "none",
      duration: 2,
    });

    gsap.to(scrollRef.current, {
      rotation: 360,
      repeat: -1,
      ease: "none",
      duration: 5,
    });
  }, []);

  return (
    <section className='h-[58vh] sm:h-[65vh] -mt-6 mx-2 lg:mx-40 sm:mx-20  relative'>
        <TableSkeleton numCoulmns={8} numRows={1} cl="h-[55vh] sm:h-[60vh]" cd= ""/>
        <h2 className='sm:px-[2vw] px-[1vw] text-center top-[6vh] sm:top-[14vh] leading-[1] absolute font-geist-regular text-[5vh] md:text-[7vh] sm:text-5xl'>A coding wizard committed to crafting elegant solutions and experience</h2>
        <div className='flex'>
          <h3 className='absolute text-center z-10 sm:right-20 bottom-[4.2rem] right-[7vh] sm:bottom-20 sm:text-lg '>Open to Work <br /> <span className='text-[1rem] text-[#8a7979] '>Based in India</span></h3>
          <img
            ref={asteriskRef}
            className='absolute z-10 bottom-20 right-5 sm:bottom-24 sm:right-10'
            src={asterisk}
            alt='Spinning Asterisk'
          />        
        </div>
        <img
            ref={scrollRef}
            className='absolute z-10 bottom-12 left-5 sm:left-10 w-[6rem] sm:w-[8rem]'
            src={scroll}
            alt='Spinning text'
          />
    </section>
  )
}

export default Section2