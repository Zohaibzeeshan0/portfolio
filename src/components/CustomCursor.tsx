import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a') ||
        target.getAttribute('role') === 'button' ||
        target.classList.contains('interactive-hover')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', updateCursor);
    window.addEventListener('mousemove', handleElementHover);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', updateCursor);
      window.removeEventListener('mousemove', handleElementHover);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="custom-cursor pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Inner Dot */}
      <div
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-blue-500 rounded-full pointer-events-none transition-transform duration-75 ease-out shadow-[0_0_10px_#3b82f6]"
        style={{
          transform: `translate3d(${position.x - 5}px, ${position.y - 5}px, 0) scale(${isHovered ? 1.5 : 1})`,
        }}
      />
      {/* Outer Glowing Ring */}
      <div
        className={`fixed top-0 left-0 rounded-full border pointer-events-none transition-all duration-300 ease-out ${
          isHovered
            ? 'w-12 h-12 border-blue-400/80 bg-blue-500/10 shadow-[0_0_20px_rgba(59,130,246,0.3)]'
            : 'w-8 h-8 border-blue-500/40 bg-transparent'
        }`}
        style={{
          transform: `translate3d(${position.x - (isHovered ? 24 : 16)}px, ${position.y - (isHovered ? 24 : 16)}px, 0)`,
        }}
      />
    </div>
  );
};



