
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  staggerChildren?: number;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
}

const SplitText: React.FC<SplitTextProps> = ({
  text,
  className,
  delay = 0,
  staggerChildren = 0.05,
  tag: Tag = 'span'
}) => {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const chars = container.querySelectorAll<HTMLElement>('.split-char');
    
    chars.forEach((char, index) => {
      char.style.animationDelay = `${delay + (index * staggerChildren)}s`;
      char.style.opacity = '0';
      char.style.transform = 'translateY(20px)';
    });

    // Trigger animation
    setTimeout(() => {
      chars.forEach((char) => {
        char.style.opacity = '1';
        char.style.transform = 'translateY(0)';
      });
    }, 100);
  }, [delay, staggerChildren, text]);

  return (
    <Tag ref={containerRef as React.RefObject<any>} className={cn('inline-block', className)}>
      {text.split('').map((char, index) => (
        <span 
          key={index} 
          className="split-char inline-block transition-all duration-300 ease-out"
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </Tag>
  );
};

export default SplitText;
