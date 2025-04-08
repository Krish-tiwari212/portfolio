import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import PropTypes from 'prop-types';
import { useGSAP } from '@gsap/react';

const LoadingScreen = ({ onLoadingComplete, assetUrls = [] }) => {
  const [progress, setProgress] = useState(0);
  const loadingScreenRef = useRef(null);
  const overlayRef = useRef(null);
  const marqueeContainerRef = useRef(null);
  const marqueeTextRef = useRef(null);
  const loaderBoxRef = useRef(null);
  const loaderFillRef = useRef(null);

  // Function to preload images
  const preloadImages = async (urls) => {
    const totalAssets = urls.length;
    let loadedAssets = 0;

    // Start with 0 progress
    setProgress(0);

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

  // Setup marquee animation
  useGSAP(() => {
    if (marqueeContainerRef.current && marqueeTextRef.current) {
      const marqueeWidth = marqueeTextRef.current.offsetWidth;
      const animationDuration = marqueeWidth / 150; // Adjust speed as needed

      gsap.to(marqueeTextRef.current, {
        x: -marqueeWidth / 2,
        repeat: -1,
        duration: animationDuration,
        ease: "linear",
      });
    }
  }, []);

  // Initial setup
  useEffect(() => {
    // Force reset loader to 0 width - even before GSAP initializes
    if (loaderFillRef.current) {
      loaderFillRef.current.style.width = '0px';
    }
    
    // Reset progress state immediately
    setProgress(0);
    
    // Initialize GSAP animations with no initial transition for the loader
    const tl = gsap.timeline();
    
    // Animate marquee in
    tl.fromTo(marqueeContainerRef.current, 
      { opacity: 0 },
      { opacity: 1, duration: 0.8, ease: "power3.out" }
    );
    
    // Show loader box immediately without animation
    if (loaderBoxRef.current) {
      gsap.set(loaderBoxRef.current, { opacity: 1, y: 0 });
    }
    
    // If there are asset URLs, preload them
    if (assetUrls.length > 0) {
      preloadImages(assetUrls);
    } else {
      // Clear any previous animations
      const animationFrame = {
        id: null
      };
      
      // Add a minimal delay to ensure DOM setup is complete
      setTimeout(() => {
        // Force width to 0 again just before starting animation
        if (loaderFillRef.current) {
          loaderFillRef.current.style.width = '0px';
        }
        
        let startTime = Date.now();
        const duration = 4000; // Increased to 4 seconds for a more visible, smoother animation
        
        const animateLoader = () => {
          const elapsed = Date.now() - startTime;
          
          // Use a non-linear easing for smoother acceleration/deceleration
          // This creates a more pleasing, natural-looking animation
          const progress = Math.min(1, elapsed / duration);
          
          // Apply easing function for smoother progress
          // This is a simple ease-in-out curve
          const easedProgress = progress < 0.5 
            ? 2 * progress * progress 
            : 1 - Math.pow(-2 * progress + 2, 2) / 2;
          
          const newProgress = Math.min(100, easedProgress * 100);
          
          setProgress(newProgress);
          
          if (newProgress < 100) {
            animationFrame.id = requestAnimationFrame(animateLoader);
          }
        };
        
        // Start the animation
        animationFrame.id = requestAnimationFrame(animateLoader);
      }, 200); // Slightly longer delay for better visual preparation
      
      // Cleanup animation on unmount
      return () => {
        if (animationFrame.id) {
          cancelAnimationFrame(animationFrame.id);
        }
      };
    }
  }, [assetUrls]);

  // Update animation when progress changes
  useEffect(() => {
    // Apply width with a smooth transition for more reliable animation
    if (loaderFillRef.current) {
      // Cancel any ongoing GSAP animations
      gsap.killTweensOf(loaderFillRef.current);
      
      // Use GSAP for smoother animation
      gsap.to(loaderFillRef.current, {
        width: `${progress}%`,
        duration: 0.5, // Longer duration for smoother movement
        ease: "power2.out", // Smoother easing function
        overwrite: true
      });
    }
    
    // If loading is complete, animate the exit
    if (progress === 100) {
      setTimeout(() => {
        const exitTl = gsap.timeline({
          onComplete: () => {
            if (onLoadingComplete) onLoadingComplete();
          }
        });
        
        // Create a smoother exit animation
        // First pause for a moment to show the completed loader
        exitTl.to({}, { duration: 0.5 });
        
        // Animate loader out with a smooth transition
        exitTl.to(loaderBoxRef.current, {
          opacity: 0,
          scale: 1.05,
          duration: 1.2,
          ease: "power3.inOut"
        });
        
        // Animate marquee out simultaneously
        exitTl.to(marqueeContainerRef.current, {
          opacity: 0,
          y: -30,
          duration: 1.2,
          ease: "power3.inOut"
        }, "-=1.2");
        
        // Final fade out with a longer, smoother transition
        exitTl.to(overlayRef.current, {
          opacity: 0,
          duration: 1.5,
          ease: "power2.inOut"
        }, "-=0.8");
      }, 800); // Delay before exit animation starts
    }
  }, [progress, onLoadingComplete]);

  return (
    <div 
      ref={loadingScreenRef} 
      className="fixed inset-0 bg-black flex flex-col items-center justify-between z-50 overflow-hidden"
    >
      <div ref={overlayRef} className="absolute inset-0 bg-black"></div>
      
      {/* Marquee at the top */}
      <div 
        ref={marqueeContainerRef}
        className="w-full overflow-hidden relative z-10 pt-8"
      >
        <div 
          ref={marqueeTextRef}
          className="inline-block whitespace-nowrap"
        >
          <h1 className="text-white text-[12rem] sm:text-[20rem] md:text-[15rem] font-bold [text-shadow:_0_0_15px_rgba(255,255,255,0.7)]">
            KRISH 克里希 クリシュ कृष கிரிஷ் KRISH 克里希 クリシュ कृष கிரிஷ் KRISH 克里希 クリシュ कृष கிரிஷ்
            KRISH 克里希 クリシュ कृष கிரிஷ் KRISH 克里希 クリシュ कृष கிரிஷ் KRISH 克里希 クリシュ कृष கிரிஷ்
          </h1>
        </div>
      </div>
      
      {/* Bottom section with loader */}
      <div className="fixed bottom-[15vh] left-0 right-0 flex flex-col items-center z-20">
        {/* Loader box with percentage indicator inside */}
        <div 
          ref={loaderBoxRef}
          className="w-[100vw] h-[30vh] sm:h-[35vh] relative overflow-hidden"
        >
          {/* Loader fill */}
          <div 
            ref={loaderFillRef} 
            className="absolute top-0 left-0 h-full bg-white"
            style={{ width: '0px' }}
          ></div>
          
          {/* Percentage indicator centered in loader */}
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            <div 
              className="text-xl sm:text-2xl md:text-2xl font-bold z-10 mix-blend-difference"
              style={{ 
                color: 'white',
                // This creates the mix-blend-difference effect which will
                // automatically invert the text color when the white background passes it
              }}
            >
              {Math.round(progress)}%
            </div>
          </div>
        </div>
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
