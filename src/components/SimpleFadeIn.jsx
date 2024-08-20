import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function ScrollFadeIn() {
  const elementRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false); // Loading state

  useEffect(() => {
    // Simulate background load time or use actual load event
    const loadTimeout = setTimeout(() => {
      setIsLoaded(true); // Mark as loaded after the background settles
    }, 3000); // Adjust time based on your content

    return () => clearTimeout(loadTimeout);
  }, []);

  useEffect(() => {
    if (!isLoaded) return;

    const animation = gsap.fromTo(
      elementRef.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        scrollTrigger: {
          trigger: elementRef.current,
          start: "top 80%",
          end: "top 20%",
          scrub: true,
        },
      }
    );

    return () => {
      animation.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [isLoaded]);

  return (
    <div ref={elementRef} style={{ padding: '20px', backgroundColor: 'gray', color: 'white' }}>
      This will fade in and slide up on scroll
    </div>
  );
}

export default ScrollFadeIn;

