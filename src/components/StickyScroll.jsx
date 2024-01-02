import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ProjectCard from './ProjectCard';
import { useGSAP } from '@gsap/react';
import vitrate from '../assets/images/vitrate.png';
import raccoon from '../assets/images/raccoon.png';
import groco from '../assets/images/groco.png';
import avidya from '../assets/images/avidya.png';
import travor from '../assets/images/travor.png';

gsap.registerPlugin(ScrollTrigger);

const StickyScroll = () => {
  const cardContainerRef = useRef(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray(cardContainerRef.current.querySelectorAll(".card"));

    cards.forEach((card, index) => {
      
      gsap.to(card, {
        scrollTrigger: {
          trigger: card,
          scrub: true,
          invalidateOnRefresh: true,
        },
        ease: "none",
      });

      ScrollTrigger.create({
        trigger: card,
        start: "center center",
        pin: true,
        pinSpacing: false,
        end: () => `+=${card.offsetHeight}`,
        invalidateOnRefresh: true,
      });
    });
    
  });
  return (
    
        <div className='cards -mt-5 pb-[38.5vh] sm:pb-[45vh] md:pb-[52vh] lg:pb-[76vh]' ref={cardContainerRef}>
            <ProjectCard color="bg-[#F2AFEF]" cl="card" url="https://www.vitrate.tech/" name="Vitrate" year="2023" image={vitrate} techstack="Flask, Postgresql, Postman, Algolia, Js"/>
            <ProjectCard color="bg-[#F1E4C3]" cl="card" url="https://raccoon-tshirt.onrender.com/" name="Raccoon" year="2023" image={raccoon} techstack="Flask, Snipcart, Postgresql, Postman, Js"/>
            <ProjectCard color="bg-[#C6A969]" cl="card" url="http://groco.onrender.com/" name="Groco" year="2023" image={groco} techstack="Flask, Postgresql, Postman, Snipcart, Js"/>
            <ProjectCard color="bg-[#C6CF9B]" cl="card" url="https://avidya.onrender.com/" name="Avidya" year="2023" image={avidya} techstack="Flask, Postgresql, Postman, Snipcart, Js"/>
            <ProjectCard color="bg-[#FF9800]" cl="card" url="https://travor.onrender.com/" name="Travor" year="2023" image={travor} techstack="Flask, Postgresql, Postman, Snipcart, Js"/>
        </div>
    
  );
};

export default StickyScroll;