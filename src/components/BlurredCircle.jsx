import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

const BlurredCircle = () => {
  const circleRef = useRef(null);

  useGSAP(() => {
    const updateCursorPosition = (e) => {
      const constrainedX = e.clientX < 0 ? 0 : e.clientX > window.innerWidth - 200 ? window.innerWidth - 200 : e.clientX;
      const constrainedY = e.clientY < 0 ? 0 : e.clientY > window.innerHeight - 200 ? window.innerHeight - 200 : e.clientY;

      gsap.to(circleRef.current, {
        x: constrainedX / 20,
        y: constrainedY / 20,
        duration: 0.5,
      });
    };

    window.addEventListener('mousemove', updateCursorPosition);

    return () => {
      window.removeEventListener('mousemove', updateCursorPosition);
    };
  }, []);

  return (
    <div ref={circleRef} className='w-[60vh] h-[60vh] bg-[#5a4a4a] rounded-full blur-3xl opacity-50'></div>
  );
};

export default BlurredCircle;