import React from 'react';
import Navbar from '../Navbar';
import TableSkeleton from '../TableSkeleton';
import ConstrainedMovementAnimation from '../ConstrainedMovementAnimation';
import Marquee from '../Marquee';

const Section1 = () => {
  return (
    <section className='h-[100vh] px-2 sm:px-20 pt-5 overflow-hidden relative border-[#6b6b6b] border-b-[1px]'>
        <Navbar />
        <div className='mt-[1.7rem]'>
          <TableSkeleton numCoulmns={17} numRows={16}/>
          <ConstrainedMovementAnimation />
          <Marquee />
        </div>
    </section>
  )
}

export default Section1