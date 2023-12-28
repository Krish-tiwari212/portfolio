import React, { useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const Marquee = () => {
  const containerRef = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    const containerWidth = containerRef.current.clientWidth;
    const animationDuration = containerWidth / 50; 
    controls.start({
      x: [-containerWidth, 0],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: animationDuration/5,
          ease: "linear",
        },
      },
    });
  }, [controls]);

  return (
    <motion.div
      ref={containerRef}
      animate={controls}
      className="track absolute top-[6dvh] sm:top-[30vh] min-w-max overflow-hidden font-geist-bold font-bold text-[15rem] text-white"
      style={{ whiteSpace: "nowrap" }}
    >
      <h1 className="text-shadow-xl">
        KRISH 克里希 クリシュ कृष கிரிஷ் KRISH 克里希 クリシュ कृष கிரிஷ் KRISH 克里希 クリシュ कृष கிரிஷ்
        KRISH 克里希 クリシュ कृष கிரிஷ் KRISH 克里希 クリシュ कृष கிரிஷ் KRISH 克里希 クリシュ कृष கிரிஷ்
      </h1>
    </motion.div>
  );
};

export default Marquee;
