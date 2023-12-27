import React from 'react';
import TableSkeleton from '../TableSkeleton';
import { FaArrowTurnDown } from "react-icons/fa6";
import StickyScroll from '../StickyScroll';

const Section3 = () => {
  return (
    <section className='mx-20 relative'>
        <h2 className='flex text-4xl mb-7 font-geist-light'><FaArrowTurnDown className="mr-2 mt-2 font-light text-3xl"/> Projects </h2>
        <hr />
        <TableSkeleton numCoulmns={9} numRows={1} cl="h-[440vh]" cd= "absolute -mt-7"/>
        <StickyScroll />
    </section>
  )
}

export default Section3