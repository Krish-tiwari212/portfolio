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
        end: () => `+=${card.offsetHeight}-500px`,
        invalidateOnRefresh: true,
      });
    });
    
  });
  return (
    
        <div className='cards sm:pb-[73vh] md:pb-[20vh] lg:pb-[83vh]' ref={cardContainerRef}>
            <ProjectCard color="bg-[#F2AFEF]" cl="card" name="Vitrate" year="2023" image={vitrate} techstack="Flask, Postgresql, Postman, Algolia, Js"/>
            <ProjectCard color="bg-[#F1E4C3]" cl="card" name="Raccoon" year="2023" image={raccoon} techstack="Flask, Snipcart, Postgresql, Postman, Algolia, Js"/>
            <ProjectCard color="bg-[#C6A969]" cl="card" name="Groco" year="2023" image={groco} techstack="Flask, Postgresql, Postman, Snipcart, Js"/>
            <ProjectCard color="bg-[#C6CF9B]" cl="card" name="Avidya" year="2023" image={avidya} techstack="Flask, Postgresql, Postman, Snipcart, Js"/>
            <ProjectCard color="bg-[#FF9800]" cl="card" name="Travor" year="2023" image={travor} techstack="Flask, Postgresql, Postman, Algolia, Js, Snipcart"/>
        </div>
    
  );
};

export default StickyScroll;