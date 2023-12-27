import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const StickyScroll = () => {
  useEffect(() => {
    const handleScrollTrigger = () => {
      const panels = gsap.utils.toArray('.panel');

      panels.forEach(panel => {
        gsap.to(panel, {
          scrollTrigger: {
            trigger: 'body',
            start: 'top 50%',
            end: () => `+=${panel.offsetHeight}`,
            pin: true,
            pinSpacing: false,
          },
        });
      });
    };

    // Wait for the DOMContentLoaded event
    document.addEventListener('DOMContentLoaded', handleScrollTrigger);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener('DOMContentLoaded', handleScrollTrigger);
    };
  }, []);

  return (
    <div className='h-[50vh] relative'>
      <div className="panel" style={{ height: '100vh', backgroundColor: 'lightblue' }}>
        Panel 1
      </div>

      <div className="panel" style={{ height: '150vh', backgroundColor: 'lightgreen' }}>
        Panel 2
      </div>

      <div className="panel" style={{ height: '80vh', backgroundColor: 'lightcoral' }}>
        Panel 3
      </div>

      <div className="panel" style={{ height: '120vh', backgroundColor: 'lightgoldenrodyellow' }}>
        Panel 4
      </div>

      {/* Add more panels as needed */}
    </div>
  );
};

export default StickyScroll;
