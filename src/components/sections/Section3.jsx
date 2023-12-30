import React from 'react';
import TableSkeleton from '../TableSkeleton';
import { FaArrowTurnDown } from "react-icons/fa6";
import StickyScroll from '../StickyScroll';

const Section3 = () => {
  return (
    <section className='mx-2 lg:mx-40 sm:mx-20 relative'>
        <h2 className='flex text-[5vh] mb-1 sm:mb-3 '><FaArrowTurnDown className="sm:mt-2 mt-3  font-light text-[4vh]"/> Projects </h2>
        <hr />
        <TableSkeleton numCoulmns={9} numRows={1} cl="h-[297vh] lg:h-[503vh] md:h-[372vh] sm:h-[312vh]" cd= "absolute -mt-7"/>
        <StickyScroll />
    </section>
  )
}

export default Section3