import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: 'power2.out',
      });
      gsap.to(followerRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.4,
        ease: 'power2.out',
      });
    };

    document.addEventListener('mousemove', onMouseMove);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="custom-cursor fixed w-4 h-4 rounded-full bg-white opacity-75 pointer-events-none z-50 mix-blend-difference"
        style={{ left: 0, top: 0, transform: 'translate(-50%, -50%)' }}
      ></div>
      <div
        ref={followerRef}
        className="custom-cursor-follower fixed w-8 h-8 rounded-full border-2 border-white opacity-50 pointer-events-none z-50 mix-blend-difference"
        style={{ left: 0, top: 0, transform: 'translate(-50%, -50%)' }}
      ></div>
    </>
  );
};

export default CustomCursor;
