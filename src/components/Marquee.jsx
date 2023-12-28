import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';

const Marquee = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    const containerWidth = containerRef.current.clientWidth;
    const animationDuration = containerWidth / 50; 

    gsap.to(containerRef.current, {
      x: -containerWidth,
      repeat: -1,
      duration: animationDuration / 5,
      ease: "none",
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="track absolute top-[3vh] sm:top-[30vh] min-w-max overflow-hidden font-geist-bold font-bold text-[15rem] text-white"
      style={{ whiteSpace: "nowrap" }}
    >
      <h1 className="text-shadow-xl">
        KRISH 克里希 クリシュ कृष கிரிஷ் KRISH 克里希 クリシュ कृष கிரிஷ் KRISH 克里希 クリシュ कृष கிரிஷ்
        KRISH 克里希 クリシュ कृष கிரிஷ் KRISH 克里希 クリシュ कृष கிரிஷ் KRISH 克里希 クリシュ कृष கிரிஷ்
      </h1>
    </div>
  );
};

export default Marquee;