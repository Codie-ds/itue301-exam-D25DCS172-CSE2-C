import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Reveal = ({ children, delay = 0, y = 80, stagger = 0 }) => {
  const comp = useRef(null);

  useGSAP(() => {
    gsap.fromTo(comp.current, 
      {
        opacity: 0,
        y: y
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: delay,
        ease: 'power3.out',
        stagger: stagger,
        scrollTrigger: {
          trigger: comp.current,
          start: 'top 85%',
        }
      }
    );
  }, { scope: comp });

  return (
    <div ref={comp} style={{ willChange: 'transform, opacity' }}>
      {children}
    </div>
  );
};

export default Reveal;
