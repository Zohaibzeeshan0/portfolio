import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // Delay in milliseconds
  direction?: 'up' | 'down' | 'left' | 'right';
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = '',
  delay = 0,
  direction = 'up',
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% visible
        rootMargin: '0px 0px -40px 0px',
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const getDirectionStyles = () => {
    if (isVisible) return 'opacity-100 translate-x-0 translate-y-0';

    switch (direction) {
      case 'up':
        return 'opacity-0 translate-y-12';
      case 'down':
        return 'opacity-0 -translate-y-12';
      case 'left':
        return 'opacity-0 translate-x-12';
      case 'right':
        return 'opacity-0 -translate-x-12';
      default:
        return 'opacity-0 translate-y-12';
    }
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${getDirectionStyles()} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};



