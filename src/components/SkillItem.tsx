
import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SkillItemProps {
  icon: LucideIcon;
  title: string;
  items: string[];
  className?: string;
  delay?: number;
}

const SkillItem: React.FC<SkillItemProps> = ({ 
  icon: Icon, 
  title, 
  items,
  className,
  delay = 0
}) => {
  return (
    <div 
      className={cn(
        "animate-slide-in flex flex-col items-center p-4 rounded-lg", 
        className
      )} 
      style={{ animationDelay: `${delay}ms`, opacity: 0 }}
    >
      <div className="flex items-center mb-2">
        <Icon className="w-5 h-5 mr-2" />
        <h3 className="font-semibold text-lg">{title}</h3>
      </div>
      <ul className="text-sm text-center">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default SkillItem;
