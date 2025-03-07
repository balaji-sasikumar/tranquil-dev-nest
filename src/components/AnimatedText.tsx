
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  animation?: 'typing' | 'fade-up' | 'fade-in';
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ 
  text, 
  className, 
  delay = 0,
  animation = 'fade-up'
}) => {
  const textRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const element = textRef.current;
    if (element) {
      element.style.animationDelay = `${delay}ms`;
    }
  }, [delay]);

  if (animation === 'typing') {
    return (
      <div className="typing-container">
        <div
          ref={textRef}
          className={cn("typing-text", className)}
          style={{ animationDelay: `${delay}ms` }}
        >
          {text}
        </div>
      </div>
    );
  }

  return (
    <div 
      ref={textRef}
      className={cn(
        animation === 'fade-up' ? 'animate-fade-up' : 'animate-fade-in',
        className
      )}
      style={{ animationDelay: `${delay}ms`, animationFillMode: 'both' }}
    >
      {text}
    </div>
  );
};

export default AnimatedText;
