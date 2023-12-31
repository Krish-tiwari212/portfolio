import React from 'react';
import stack from '../assets/images/stack.webp';


const Stack = ({logo: Logo, name, category}) => {
  return (
    <div className='relative block w-[5rem] h-[5rem] mt-8 '>
        <img src={stack} className='grayscale blur-[0.5px] brightness-[0.45] w-full h-full'/>
        <Logo className='absolute text-5xl top-0 right-0 bottom-0 left-0 m-auto'/>
        <h3 className='mt-4 font-semibold'>{name}</h3>
        <p className='text-md text-[#707070]'>{category}</p>
    </div>
  )
}

export default Stack