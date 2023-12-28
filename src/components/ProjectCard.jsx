import React from 'react';
import { IoArrowBackCircleSharp } from 'react-icons/io5';

const ProjectCard = ({ cl, color, index, year, techstack, name, image, url }) => {
  return (
    <div className={`lg:mb-10 h-[45vh] lg:h-[80vh] md:h-[58vh] sm:h-[48vh] mb-10 sm:mb-15 ${cl} ${color} overflow-hidden font-geist-light p-5 rounded-2xl relative mt-${index * 10}vh`}>
      <div className='flex'>
        <h2 className='text-black font-thin'>{year}</h2>
        <h2 className='text-black font-thin ml-20 sm:ml-auto'>{techstack}</h2>
      </div>
      <div className='border-[0.1em] border-[#2e2828] mt-3' />
      <div className='flex mt-4'>
        <h2 className='text-black font-bold text-4xl'>{name}</h2>
        <a className='ml-auto' href={url}><IoArrowBackCircleSharp className='text-4xl text-black hover:scale-[110%] rotate-[135deg]' /></a>
      </div>
      <img
        className='mt-5 object-center h-auto object-cover w-full' // Use w-full to make it full width
        src={image}
        alt=''
      />
    </div>
  );
};

export default ProjectCard;
