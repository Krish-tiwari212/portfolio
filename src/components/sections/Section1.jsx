import React from 'react';
import Navbar from '../Navbar';
import TableSkeleton from '../TableSkeleton';
import ConstrainedMovementAnimation from '../ConstrainedMovementAnimation';
import Marquee from '../Marquee';
import "../../index.css";

const Section1 = () => {
  return (
    <section className='h-[100dvh] px-2 sm:px-20 pt-4 -mt-4 cont relative border-[#6b6b6b] border-b-[1px]'>
        <div>
          <TableSkeleton numCoulmns={17} numRows={16}/>
          <ConstrainedMovementAnimation />
          <Marquee />
        </div>
    </section>
  )
}

export default Section1