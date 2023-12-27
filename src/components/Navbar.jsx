import React from 'react'

const Navbar = () => {
    const navItems = ['Resume', 'About', 'LinkedIn', 'Contact'];
    return (
        <div className='relative z-20 w-[100%] -mr-[5rem] ml-auto'>
            <nav className='w-[100vw] -mt-[1.3rem] pb-[1.4rem] -ml-[10rem] flex justify-between fixed backdrop-blur-lg bg-opacity-80'>
                <h3 className='ml-[5rem] mt-[1.3rem]'>Full Stack Developer <span className='text-xl tracking-[-0.1em]'>---</span> Krish</h3>
                <ul className='flex space-x-6 mt-[1.6rem] mr-[5rem] font-geist-light text-[0.9em] text-[#8a7979]'>
                {navItems.map((item, index) => (
                    <li key={index} className='hover:text-[#e6e6e6]'>
                    <a href='#'>{item}</a>
                    </li>
                ))}
                </ul>
            </nav>
        </div>
    )
}

export default Navbar