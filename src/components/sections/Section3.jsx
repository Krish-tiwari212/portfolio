import React from 'react';
import TableSkeleton from '../TableSkeleton';
import { FaArrowTurnDown } from "react-icons/fa6";
import StickyScroll from '../StickyScroll';

const Section3 = () => {
  return (
    <section className='mx-2 lg:mx-40 md:-mt-4 sm:mx-20 relative'>
        <h2 className='flex text-[4vh] mb-1 sm:mb-3 '><FaArrowTurnDown className="sm:mt-4 mt-3  font-light text-[3vh]"/> Projects </h2>
        <TableSkeleton numCoulmns={8} numRows={1} cl="h-[292vh] lg:h-[503vh] md:h-[369.5vh] sm:h-[312vh]" cd= "absolute -mt-7 border-t-2 border-slate-50"/>
        <StickyScroll />
    </section>
  )
}

export default Section3