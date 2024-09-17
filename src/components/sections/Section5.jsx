import React from 'react';
import { FaArrowTurnDown } from 'react-icons/fa6';
import TableSkeleton from '../TableSkeleton';
import { IoLogoFigma } from "react-icons/io5";
import { SiPostman } from "react-icons/si";
import { SiFlask } from "react-icons/si";
import { SiFastapi } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiGreensock } from "react-icons/si";
import { FaGolang } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { FaPython } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { SiCanva } from "react-icons/si";
import { SiSvelte } from "react-icons/si";
import { SiNeo4J } from "react-icons/si";
import { SiTypescript } from "react-icons/si";

import Stack from '../Stack';

const Section5 = () => {
  return (
    <section className='mx-2 sm:mx-20 lg:mx-40 relative'>
        <h2 className='flex text-[4vh] font-bold pb-2 mt-7 font-geist-light'>
          <FaArrowTurnDown className='mt-3 font-geist-light text-[3vh]' /> Stack
        </h2>
        <TableSkeleton numCoulmns={8} numRows={1} cl='' cd='absolute -mt-7 h-[73rem] sm:h-[74rem] lg:h-[74rem] border-t-2 border-slate-50' />
        <div className='h-[70rem] -mt-8 sm:h-[71rem] lg:h-[72rem]'>
            <div className='flex justify-around'>
                <Stack logo={IoLogoFigma} name="Figma" category="Design"/>
                <Stack logo={SiPostman} name="Postman" category="Api"/>
                <Stack logo={SiFlask} name="Flask" category="Backend"/>
            </div>
            <div className='flex justify-around mt-20'>
                <Stack logo={SiFastapi} name="Fastapi" category="Backend"/>
                <Stack logo={FaReact} name="React" category="Frontend"/>
                <Stack logo={SiTailwindcss} name="Tailwind" category="Style"/>
            </div>
            <div className='flex justify-around mt-20'>
                <Stack logo={SiPostgresql} name="PostgreSQL" category="Database"/>
                <Stack logo={SiMongodb} name="MongoDB" category="Database"/>
                <Stack logo={SiGreensock} name="GSAP" category="Animation"/>
            </div>
            <div className='flex justify-around mt-20'>
                <Stack logo={FaGolang} name="GO" category="Language"/>
                <Stack logo={IoLogoJavascript} name="Javascript" category="Language"/>
                <Stack logo={FaPython} name="Python" category="Language"/>
            </div>
            <div className='flex justify-around mt-20'>
                <Stack logo={SiExpress} name="Express.js" category="Backend"/>
                <Stack logo={SiNextdotjs} name="Next.js" category="Framework"/>
                <Stack logo={SiCanva} name="Canva" category="Design"/>
            </div>
            <div className='flex justify-around mt-20'>
                <Stack logo={SiSvelte} name="Svelte" category="Frontend"/>
                <Stack logo={SiNeo4J} name="Neo4j" category="Database"/>
                <Stack logo={SiTypescript} name="Typescript" category="Language"/>
            </div>
        </div>
    </section>
  )
}

export default Section5