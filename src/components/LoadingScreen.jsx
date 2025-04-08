import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import PropTypes from 'prop-types';

const LoadingScreen = ({ onLoadingComplete, assetUrls = [] }) => {
  const [progress, setProgress] = useState(0);
  const loadingScreenRef = useRef(null);
  const overlayRef = useRef(null);
  const counterRef = useRef(null);
  const progressBarRef = useRef(null);
  const progressTextRef = useRef(null);
  const gridRef = useRef(null);
  const gridItemsRef = useRef([]);
  const textLinesRef = useRef(null);
  const textRef = useRef(null);

  // Function to preload images
  const preloadImages = async (urls) => {
    const totalAssets = urls.length;
    let loadedAssets = 0;

    const promises = urls.map(
      (url) =>
        new Promise((resolve) => {
          const img = new Image();
          img.src = url;
          img.onload = () => {
            loadedAssets++;
            setProgress(Math.floor((loadedAssets / totalAssets) * 100));
            resolve();
          };
          img.onerror = () => {
            loadedAssets++;
            setProgress(Math.floor((loadedAssets / totalAssets) * 100));
            resolve();
          };
        })
    );

    await Promise.all(promises);
  };

  // Create grid items
  useEffect(() => {
    // Create grid items dynamically
    if (gridRef.current) {
      const gridItems = [];
      for (let i = 0; i < 36; i++) {
        const item = document.createElement('div');
        item.className = 'grid-item bg-[#111111] rounded-md';
        gridRef.current.appendChild(item);
        gridItems.push(item);
      }
      gridItemsRef.current = gridItems;
    }
  }, []);

  // Initial setup
  useEffect(() => {
    // Initialize GSAP animations
    const tl = gsap.timeline();
    
    // Animate grid items in
    if (gridItemsRef.current.length > 0) {
      tl.fromTo(gridItemsRef.current, 
        { scale: 0, opacity: 0 },
        { 
          scale: 1, 
          opacity: 1, 
          duration: 0.8, 
          stagger: { 
            amount: 0.5,
            grid: [6, 6],
            from: "center"
          },
          ease: "power3.out"
        }
      );
    }
    
    // Animate text lines
    tl.fromTo(textLinesRef.current.children,
      { width: 0 },
      { 
        width: "100%", 
        duration: 0.8, 
        stagger: 0.1,
        ease: "power2.inOut"
      },
      "-=0.4"
    );
    
    // Animate counter and progress bar
    tl.fromTo([counterRef.current, progressBarRef.current, progressTextRef.current, textRef.current],
      { opacity: 0, y: 20 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.6, 
        stagger: 0.1,
        ease: "power2.out"
      },
      "-=0.4"
    );

    // If there are asset URLs, preload them
    if (assetUrls.length > 0) {
      preloadImages(assetUrls);
    } else {
      // If no assets to preload, simulate loading
      const interval = setInterval(() => {
        setProgress((prev) => {
          const newProgress = prev + 1;
          if (newProgress >= 100) {
            clearInterval(interval);
            return 100;
          }
          return newProgress;
        });
      }, 30);

      return () => clearInterval(interval);
    }
  }, [assetUrls]);

  // Update animation when progress changes
  useEffect(() => {
    // Update the counter display
    if (counterRef.current) {
      counterRef.current.textContent = progress;
    }
    
    // Animate the progress bar
    if (progressBarRef.current) {
      gsap.to(progressBarRef.current, {
        scaleX: progress / 100,
        duration: 0.4,
        ease: "power2.out"
      });
    }
    
    // Animate grid items based on progress
    if (gridItemsRef.current.length > 0) {
      const itemsToAnimate = Math.floor((gridItemsRef.current.length * progress) / 100);
      
      for (let i = 0; i < itemsToAnimate; i++) {
        if (gridItemsRef.current[i]) {
          gsap.to(gridItemsRef.current[i], {
            backgroundColor: "#f1f1f1",
            duration: 0.3,
            ease: "power1.inOut"
          });
        }
      }
    }
    
    // If loading is complete, animate the exit
    if (progress === 100) {
      setTimeout(() => {
        const exitTl = gsap.timeline({
          onComplete: () => {
            if (onLoadingComplete) onLoadingComplete();
          }
        });
        
        // Create a dramatic exit animation
        exitTl.to(textRef.current, {
          y: -20,
          opacity: 0,
          duration: 0.4,
          ease: "power2.in"
        });
        
        exitTl.to([counterRef.current, progressBarRef.current, progressTextRef.current], {
          opacity: 0,
          y: -20,
          duration: 0.4,
          stagger: 0.1,
          ease: "power2.in"
        }, "-=0.2");
        
        // Animate grid items out in a wave pattern
        exitTl.to(gridItemsRef.current, {
          scale: 1.5,
          opacity: 0,
          duration: 0.8,
          stagger: {
            amount: 0.5,
            grid: [6, 6],
            from: "center"
          },
          ease: "power3.inOut"
        }, "-=0.2");
        
        // Final fade out
        exitTl.to(overlayRef.current, {
          opacity: 0,
          duration: 0.8,
          ease: "power2.inOut"
        }, "-=0.4");
      }, 800); // Delay before exit animation starts
    }
  }, [progress, onLoadingComplete]);

  return (
    <div 
      ref={loadingScreenRef} 
      className="fixed inset-0 bg-[#060606] flex flex-col items-center justify-center z-50 overflow-hidden"
    >
      <div ref={overlayRef} className="absolute inset-0 bg-[#060606]"></div>
      
      {/* Grid animation */}
      <div 
        ref={gridRef}
        className="grid grid-cols-6 gap-2 w-[280px] h-[280px] md:w-[400px] md:h-[400px] relative z-10 mb-12"
      >
        {/* Grid items will be created dynamically */}
      </div>
      
      {/* Text lines */}
      <div ref={textLinesRef} className="flex flex-col gap-1 mb-8 w-[280px] md:w-[400px] relative z-10">
        <div className="h-[2px] bg-white opacity-20"></div>
        <div className="h-[2px] bg-white opacity-40"></div>
        <div className="h-[2px] bg-white opacity-60"></div>
      </div>
      
      {/* Loading text */}
      {/* <div 
        ref={textRef}
        className="text-white text-xl md:text-2xl font-light mb-6 tracking-widest uppercase z-10"
      >
        Loading Experience
      </div> */}
      
      {/* Counter */}
      <div 
        ref={counterRef}
        className="text-[60px] md:text-[80px] font-bold text-white leading-none mb-4 z-10"
      >
        {progress}
      </div>
      
      {/* Progress bar */}
      <div className="w-[280px] md:w-[400px] h-[3px] bg-[#333333] relative z-10 overflow-hidden rounded-full mb-2">
        <div 
          ref={progressBarRef} 
          className="absolute top-0 left-0 h-full w-full bg-white origin-left rounded-full"
          style={{ transform: 'scaleX(0)' }}
        ></div>
      </div>
      
      <div 
        ref={progressTextRef} 
        className="text-white text-sm tracking-[0.2em] uppercase z-10 opacity-50"
      >
        Loading assets
      </div>
    </div>
  );
};

LoadingScreen.propTypes = {
  onLoadingComplete: PropTypes.func,
  assetUrls: PropTypes.arrayOf(PropTypes.string)
};

LoadingScreen.defaultProps = {
  onLoadingComplete: () => {},
  assetUrls: []
};

export default LoadingScreen;
