import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar';
import TableSkeleton from '../TableSkeleton';
import ConstrainedMovementAnimation from '../ConstrainedMovementAnimation';
import Marquee from '../Marquee';
import "../../index.css";

const Section1 = () => {
  const [numColumns, setNumColumns] = useState(17);
  const [numRows, setNumRows] = useState(16);

  useEffect(() => {
    // Adjust the number of columns and rows based on the screen width
    if (window.innerWidth <= 768) { // 768px is typically the width for mobile devices
      setNumColumns(10);
      setNumRows(20);
    }
  }, []);

  return (
    <section className='h-[100vh] px-2 lg:px-40 sm:px-20 pt-4 -mt-4 cont relative border-[#6b6b6b] border-b-[1px]'>
        <div>
          <TableSkeleton numCoulmns={numColumns} numRows={numRows}/>
          <ConstrainedMovementAnimation />
          <Marquee />
        </div>
    </section>
  )
}

export default Section1