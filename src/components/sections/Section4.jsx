import React from 'react'
import { FaArrowTurnDown } from 'react-icons/fa6';
import TableSkeleton from '../TableSkeleton';
import real_me from '../../assets/images/real_me_1.png';

const Section4 = () => {
  return (
    <section className='mx-2 sm:mx-20 lg:mx-40 relative' id='about'>
        <h2 className='flex text-[4vh] font-bold pb-2 mt-7 font-geist-light'>
          <FaArrowTurnDown className='mt-3 font-geist-light text-[3vh]' /> About
        </h2>
        <TableSkeleton numCoulmns={8} numRows={1} cl='' cd='absolute -mt-7 h-[143vh] sm:h-[130vh] lg:h-[90vh] border-t-2 border-slate-50' />
        <div className='h-[140vh] sm:h-[131vh] md:h-[127vh] lg:h-[83vh] lg:flex'>
          <div className='-mt-12 lg:right-0 cont lg:order-2 lg:absolute h-[80vh] lg:w-[35vw]'>
            <img src={real_me} alt="" srcset="" className='grayscale object-cover object-center w-full h-full' />
          </div>
          <div className='lg:order-1 pt-5 lg:pt-0 absolute z-10 lg:static md:mt-6 lg:w-1/2'>
            <h2 className='lg:text-[2.5vw] lg:-mt-5  text-[8.8vw] sm:text-[5vw] sm:leading-[5vh] lg:leading-[6vh]  leading-[4.5vh] z-[100]'>
              Hey! I'm Krish, a dedicated Full Stack Developer, seamlessly weaving the art of coding with a passion for fitness and the exacting precision of culinary craftsmanship. Embark on this journey with me, where technology meets well-being.          
            </h2>
          </div>
        </div>
    </section>
  )
}

export default Section4