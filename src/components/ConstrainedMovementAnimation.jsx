import React, { useRef } from 'react';
import { gsap } from 'gsap';
import MyImg from '../assets/images/me.png';
import { useGSAP } from '@gsap/react';


const ConstrainedMovementAnimation = () => {
  const imgRef = useRef(null);

  useGSAP(() => {
    const updateCursorPosition = (e) => {
      const constrainedX = e.clientX < 0 ? 0 : e.clientX > window.innerWidth - 200 ? window.innerWidth - 200 : e.clientX;
      const constrainedY = e.clientY < 0 ? 0 : e.clientY > window.innerHeight - 200 ? window.innerHeight - 200 : e.clientY;

      gsap.to(imgRef.current, {
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
    <div className="flex justify-center overflow-hidden">
      <div
        ref={imgRef}
        className="grayscale absolute bottom-0 sm:top-1 w-[55vh] sm:w-[48rem] z-10"
      >
        <img src={MyImg} alt="Me" />
      </div>
    </div>
  );
};

export default ConstrainedMovementAnimation;
