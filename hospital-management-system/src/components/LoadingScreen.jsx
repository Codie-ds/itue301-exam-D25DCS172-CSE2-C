import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import './LoadingScreen.css';

const LoadingScreen = ({ onComplete }) => {
  const containerRef = useRef(null);
  const leftPanelRef = useRef(null);
  const rightPanelRef = useRef(null);
  const logoRef = useRef(null);
  const ecgLineRef = useRef(null);
  const statusRef = useRef(null);
  const contentRef = useRef(null);
  
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // 1. Progress Counter Animation
    const dummy = { val: 0 };
    gsap.to(dummy, {
      val: 100,
      duration: 1.8,
      ease: 'power2.inOut',
      onUpdate: () => setProgress(Math.round(dummy.val))
    });

    // 2. Main Timeline
    const tl = gsap.timeline({
      onComplete: () => {
        if (onComplete) onComplete();
      }
    });

    tl.to(logoRef.current, {
      opacity: 1,
      y: -10,
      duration: 0.6,
      ease: 'power3.out'
    }, 0.2)
    .to(ecgLineRef.current, {
      width: '100%',
      duration: 1.6,
      ease: 'power2.inOut'
    }, 0.4)
    .to(statusRef.current, {
      opacity: 1,
      duration: 0.4
    }, 1.2)
    .to(contentRef.current, {
      opacity: 0,
      duration: 0.4,
      ease: 'power2.out'
    }, 2.0)
    .to(leftPanelRef.current, {
      xPercent: -100,
      duration: 0.8,
      ease: 'expo.inOut'
    }, 2.2)
    .to(rightPanelRef.current, {
      xPercent: 100,
      duration: 0.8,
      ease: 'expo.inOut'
    }, 2.2);

  }, [onComplete]);

  return (
    <div className="preloaderContainer" ref={containerRef}>
      <div className="panel leftPanel" ref={leftPanelRef}></div>
      <div className="panel rightPanel" ref={rightPanelRef}></div>
      
      <div className="content" ref={contentRef}>
        <div className="logo" ref={logoRef}>MEDCARE+</div>
        <div className="ecgContainer">
          <div className="ecgLine" ref={ecgLineRef}></div>
        </div>
        <div className="counter">{progress.toString().padStart(2, '0')}%</div>
        <div className="statusText" ref={statusRef}>INITIALIZING YOUR CARE</div>
      </div>
    </div>
  );
};

export default LoadingScreen;
