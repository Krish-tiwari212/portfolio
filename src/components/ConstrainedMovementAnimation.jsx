import React, { useState, useEffect } from 'react';
import { useSpring, animated, config } from 'react-spring';
import MyImg from '../assets/images/me.png';

const ConstrainedMovementAnimation = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateCursorPosition = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateCursorPosition);

    return () => {
      window.removeEventListener('mousemove', updateCursorPosition);
    };
  }, []);

  const [{ xy }, set] = useSpring(() => ({ xy: [0, 0], config: config.default }));

  useEffect(() => {
    set({ xy: [cursorPosition.x, cursorPosition.y] });
  }, [cursorPosition.x, cursorPosition.y, set]);

  const constrainedX = cursorPosition.x < 0 ? 0 : cursorPosition.x > window.innerWidth - 200 ? window.innerWidth - 200 : cursorPosition.x;
  const constrainedY = cursorPosition.y < 0 ? 0 : cursorPosition.y > window.innerHeight - 200 ? window.innerHeight - 200 : cursorPosition.y;

  return (
    <div className="flex justify-center overflow-hidden">
      <animated.div
        className="grayscale absolute top-24 sm:top-10 w-[66dvh] sm:w-[43rem] z-10"
        style={{
          transform: xy.to((x, y) => `translate3d(${x / 20}px, ${y / 20}px, 0)`),
        }}
      >
        <img src={MyImg} alt="My Image" />
      </animated.div>
    </div>
  );
};

export default ConstrainedMovementAnimation;
