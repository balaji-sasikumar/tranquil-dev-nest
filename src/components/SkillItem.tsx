
import React from 'react';
import { cn } from '@/lib/utils';
import { 
  Code, Database, Globe, 
  GitBranch, Server, Cloud,
  FileCode, Cpu, MonitorSmartphone
} from 'lucide-react';

interface SkillItemProps {
  icon: string;
  title: string;
  items: string[];
  className?: string;
  delay?: number;
}

const SkillItem: React.FC<SkillItemProps> = ({ 
  icon, 
  title, 
  items,
  className,
  delay = 0
}) => {
  // Map skill names to appropriate icons
  const getIcon = () => {
    switch(icon) {
      case 'languages':
        return <FileCode className="w-5 h-5 mr-2" />;
      case 'frameworks':
        return <Code className="w-5 h-5 mr-2" />;
      case 'webTech':
        return <Globe className="w-5 h-5 mr-2" />;
      case 'database':
        return <Database className="w-5 h-5 mr-2" />;
      case 'tools':
        return <GitBranch className="w-5 h-5 mr-2" />;
      case 'platforms':
        return <Cpu className="w-5 h-5 mr-2" />;
      case 'cloud':
        return <Cloud className="w-5 h-5 mr-2" />;
      case 'mobile':
        return <MonitorSmartphone className="w-5 h-5 mr-2" />;
      default:
        return <Server className="w-5 h-5 mr-2" />;
    }
  };

  return (
    <div 
      className={cn(
        "animate-slide-in flex flex-col items-center p-4 rounded-lg", 
        className
      )} 
      style={{ animationDelay: `${delay}ms`, opacity: 0 }}
    >
      <div className="flex items-center mb-2">
        {getIcon()}
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
