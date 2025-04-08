import { useEffect, useState, useRef } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Section1 from './components/sections/Section1';
import Section2 from './components/sections/Section2';
import Section3 from './components/sections/Section3';
import './index.css'; 
import Section4 from './components/sections/Section4';
import Section5 from './components/sections/Section5';
import Section6 from './components/sections/Section6';
import gsap from "gsap";
import LoadingScreen from './components/LoadingScreen';

// Import all images for preloading
import asteriskImg from './assets/images/asterisk.svg';
import avidyaImg from './assets/images/avidya.png';
import balancedImg from './assets/images/balanced.png';
import grocoImg from './assets/images/groco.png';
import jivanImg from './assets/images/jivan.png';
import liveplayImg from './assets/images/liveplay.png';
import meImg from './assets/images/me.png';
import nutonImg from './assets/images/nuton.png';
import raccoonImg from './assets/images/raccoon.png';
import realMe1Img from './assets/images/real_me_1.png';
import realMeImg from './assets/images/real_me.jpeg';
import scrollImg from './assets/images/Scroll.png';
import stackGifImg from './assets/images/stack.gif';
import stackWebpImg from './assets/images/stack.webp';
import travorImg from './assets/images/travor.png';
import vitrateImg from './assets/images/vitrate.png';

// Image paths for preloading
const imageAssets = [
  asteriskImg,
  avidyaImg,
  balancedImg,
  grocoImg,
  jivanImg,
  liveplayImg,
  meImg,
  nutonImg,
  raccoonImg,
  realMe1Img,
  realMeImg,
  scrollImg,
  stackGifImg,
  stackWebpImg,
  travorImg,
  vitrateImg
];

const App = () => {
  const circle = useRef();
  const mouse = useRef({ x: 0, y: 0 });
  const delayedMouse = useRef({ x: 0, y: 0 });
  const contentRef = useRef(null);
  const navbarRef = useRef(null);

  const handleMouseMove = (e) => {
    mouse.current = { x: e.clientX, y: e.clientY };
  };

  const animateCursor = (x, y) => {
    gsap.set(circle.current, { x, y, yPercent: -50, xPercent: -50 });
  };

  const lerp = (x, y, alpha) => x * (1 - alpha) + y * alpha;

  const animation = () => {
    const { x, y } = delayedMouse.current;
    delayedMouse.current = {
      x: lerp(x, mouse.current.x, 0.075),
      y: lerp(y, mouse.current.y, 0.075),
    };
    animateCursor(delayedMouse.current.x, delayedMouse.current.y);
    window.requestAnimationFrame(animation);
  };

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    animation();
    window.addEventListener("mousemove", handleMouseMove);

    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Effect for content animation after loading
  useEffect(() => {
    if (!isLoading && contentRef.current) {
      // Create a timeline for the content reveal animation
      const tl = gsap.timeline();
      
      // Animate the cursor
      tl.fromTo(circle.current, 
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.6, ease: "power3.out" }
      );
      
      // Only animate the navbar if it's not on mobile
      if (window.innerWidth >= 640 && navbarRef.current) { // 640px is the sm breakpoint in Tailwind
        tl.fromTo(navbarRef.current,
          { y: -50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
          "-=0.4"
        );
      } else if (navbarRef.current) {
        // On mobile, just make sure the navbar is visible without animation
        gsap.set(navbarRef.current, { clearProps: "all" });
      }
      
      // Get only the sections we want to animate (excluding Section3 which has its own animations)
      const sectionsToAnimate = [
        contentRef.current.children[0], // Section1
        contentRef.current.children[1], // Section2
        contentRef.current.children[3], // Section4
        contentRef.current.children[4], // Section5
        contentRef.current.children[5]  // Section6
      ];
      
      // Animate only selected sections
      tl.fromTo(sectionsToAnimate,
        { y: 30, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8, 
          stagger: 0.1, 
          ease: "power3.out" 
        },
        "-=0.6"
      );
    }
  }, [isLoading]);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} assetUrls={imageAssets} />;
  }

  return (
    <>
      <div ref={circle} className='w-[30px] h-[30px] bg-[#f1f1f1] rounded-full fixed z-50 pointer-events-none opacity-0'></div>
      <div className='bg-[#060606] font-geist-regular text-[#e6e6e6]'>
        {/* Navbar is outside the animation container to ensure mobile menu works correctly */}
        <Navbar ref={navbarRef} />
        <div ref={contentRef}>
          <Section1 />
          <Section2 />
          <Section3 />
          <Section4 />
          <Section5 />
          <Section6 />
        </div>
      </div>
    </>
  );
};

export default App;
