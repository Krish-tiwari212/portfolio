import React, {useEffect, useState} from 'react';
import { FaArrowTurnDown } from 'react-icons/fa6';
import TableSkeleton from '../TableSkeleton';
import BlurredCircle from '../BlurredCircle';
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


const Section6 = () => {
    const [numColumns, setNumColumns] = useState(15);
    const [numRows, setNumRows] = useState(10);
  
    useEffect(() => {
      if (window.innerWidth <= 768) { 
        setNumColumns(17);
        setNumRows(9);
      }
    }, []);  
  return (
    <section className='mx-2 sm:mx-20 lg:mx-40 relative' id='contact'>
        <h2 className='flex text-[4vh] font-bold pb-2 mt-7 font-geist-light'>
          <FaArrowTurnDown className='mt-3 font-geist-light text-[3vh]' /> Contact
        </h2>
        <hr className='-mt-1'/>
        <TableSkeleton numCoulmns={numColumns} numRows={numRows} cl='' cd='absolute h-[40rem] -mt-7 sm:h-[10rem]' />
        <div className='h-[44rem] relative'>
            <div className='absolute top-0 right-0 bottom-0 left-0 flex items-center justify-center -mt-[8rem]'>
                <BlurredCircle />
            </div>
            <p className='absolute text-[#707070] top-0 right-0 bottom-0 left-0 flex items-center justify-center -mt-[12rem]'>Say Hello</p>
            <h2>
                <a href="mailto:krishtiwari2122@gmail.com" className='text-[7vw] md:text-[3rem] absolute top-0 right-0 bottom-0 -mt-[6rem] left-0 flex items-center justify-center'>krishtiwari2122@gmail.com</a>
            </h2>
            <div className='bottom-0 absolute right-0 left-3 mb-8'>
                <h2>Made with ❤️ by Krish</h2>
            </div>
            <div className='bottom-0 absolute right-3 mb-8 flex'>
                <a href="https://www.instagram.com/krish_tiwari215/"><FaInstagram className='text-[#707070] text-[1.5rem] hover:text-[#e1306c] cursor-pointer'/></a>
                <a href="https://github.com/Krish-tiwari212"><FaGithub className='text-[#707070] text-[1.5rem] ml-2 hover:text-[#e1306c] cursor-pointer'/></a>
            </div>
        </div>
        
    </section>
  )
}

export default Section6;