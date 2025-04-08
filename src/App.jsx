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
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LoadingScreen from './components/LoadingScreen';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

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

  // Setup smooth scrolling and cursor
  useEffect(() => {
    animation();
    window.addEventListener("mousemove", handleMouseMove);

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Make sure ScrollTrigger works with Lenis
    lenis.on('scroll', ScrollTrigger.update);

    // Important: Refresh ScrollTrigger when scrolling is complete
    lenis.on('complete', () => {
      ScrollTrigger.refresh();
    });

    return () => {
      lenis.destroy();
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Effect specifically for ScrollTrigger refresh after loading
  useEffect(() => {
    if (!isLoading) {
      // Refresh ScrollTrigger after content is loaded and visible
      setTimeout(() => {
        ScrollTrigger.refresh(true);
      }, 100);
    }
  }, [isLoading]);

  // Effect for content visibility after loading
  useEffect(() => {
    if (!isLoading && contentRef.current) {
      // Make cursor visible immediately without animation
      if (circle.current) {
        gsap.set(circle.current, { scale: 1, opacity: 1 });
      }
      
      // Make navbar visible immediately
      if (navbarRef.current) {
        gsap.set(navbarRef.current, { clearProps: "all" });
      }
      
      // Make all sections visible without animations that might interfere with ScrollTrigger
      if (contentRef.current) {
        gsap.set(contentRef.current.children, { 
          opacity: 1,
          y: 0,
          clearProps: "all" // This is important to remove any transform that might interfere with ScrollTrigger
        });
      }
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
      <div ref={circle} className='w-[30px] h-[30px] bg-[#f1f1f1] rounded-full fixed z-50 pointer-events-none'></div>
      <div className='bg-[#060606] font-geist-regular text-[#e6e6e6]'>
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
