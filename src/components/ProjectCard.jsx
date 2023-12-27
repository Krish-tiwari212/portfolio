import React from 'react';
import { IoArrowBackCircleSharp } from 'react-icons/io5';
import vitrate from '../assets/images/vitrate.png';

const ProjectCard = () => {
  return (
    <div className='h-[37rem] bg-[#d9ff04] overflow-hidden font-geist-light mx-20 p-5 rounded-2xl'>
      <div className='flex'>
        <h2 className='text-black font-thin'>2022</h2>
        <h2 className='text-black font-thin ml-auto'>React, Tailwind, Framer Motion, Flask</h2>
      </div>
      <div className='border-[0.1em] border-[#2e2828] mt-3' />
      <div className='flex mt-4'>
        <h2 className='text-black font-bold text-4xl'>Project Name</h2>
        <IoArrowBackCircleSharp className='ml-auto text-4xl text-black hover:scale-[110%] rotate-[135deg]' />
      </div>
      <img
        className='mt-5 object-center h-[27rem] object-cover w-full '
        src={vitrate}
        alt=''
      />
    </div>
  );
};

export default ProjectCard;
