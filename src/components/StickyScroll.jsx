import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ProjectCard from './ProjectCard';
import { useGSAP } from '@gsap/react';
import vitrate from '../assets/images/vitrate.png';
import balanced from '../assets/images/balanced.png';
import nuton from '../assets/images/nuton.png';
import liveplay from '../assets/images/liveplay.png';
import jivan from '../assets/images/jivan.png';

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
            <ProjectCard color="bg-[#C6CF9B]" cl="card" url="https://nuton-ai.vercel.app" name="Nuton AI" year="2025" image={nuton} techstack="FastAPI, Next JS, Langchain, Pinecone, Supabase"/>
            <ProjectCard color="bg-[#F1E4C3]" cl="card" url="https://thebalanced.news" name="The Balanced News" year="2025" image={balanced} techstack="Next JS, Tailwind CSS, Postgresql, Postman"/>
            <ProjectCard color="bg-[#FF9800]" cl="card" url="https://liveplay.in" name="Liveplay" year="2024" image={liveplay} techstack="Next JS, Tailwind, Supabase, Snipcart, FastAPI"/>
            <ProjectCard color="bg-[#FAE8E0]" cl="card" url="https://jivanhealth.in/" name="Jivan Medical" year="2023" image={jivan} techstack="Next JS, Prisma, ShadCN, Tailwind, TS"/>
            <ProjectCard color="bg-[#F2AFEF]" cl="card" url="https://vitrate-z8pd.onrender.com/" name="Vitrate" year="2023" image={vitrate} techstack="Flask, Postgresql, Postman, Algolia, Js"/>
            {/* <ProjectCard color="bg-[#C6A969]" cl="card" url="http://groco.onrender.com/" name="Groco" year="2023" image={groco} techstack="Flask, Postgresql, Postman, Snipcart, Js"/> */}
        </div>
    
  );
};

export default StickyScroll;