
import React from 'react';
import { cn } from '@/lib/utils';
import { 
  Code, Database, Globe, 
  GitBranch, Server, Cloud,
  FileCode, Cpu, MonitorSmartphone,
  Braces, Terminal, Coffee,
  Package, PenTool, Hash,
  Webhook
} from 'lucide-react';

interface SkillIconMappingType {
  [key: string]: JSX.Element;
}

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

  // Map individual skill items to icons
  const skillIconMapping: SkillIconMappingType = {
    // Languages
    'TypeScript': <Braces className="w-4 h-4 mr-1" />,
    'Python': <Terminal className="w-4 h-4 mr-1" />,
    'C#': <Hash className="w-4 h-4 mr-1" />,
    'JavaScript': <Code className="w-4 h-4 mr-1" />,
    
    // Frameworks
    'Node.js': <Server className="w-4 h-4 mr-1" />,
    'React': <Code className="w-4 h-4 mr-1" />,
    'Angular': <Code className="w-4 h-4 mr-1" />,
    'Ionic': <MonitorSmartphone className="w-4 h-4 mr-1" />,
    'Electron': <Globe className="w-4 h-4 mr-1" />,
    
    // Web Technologies
    'Bootstrap': <PenTool className="w-4 h-4 mr-1" />,
    'Tailwind CSS': <PenTool className="w-4 h-4 mr-1" />,
    'Material-UI': <PenTool className="w-4 h-4 mr-1" />,
    
    // Database
    'MongoDB': <Database className="w-4 h-4 mr-1" />,
    'SQL': <Database className="w-4 h-4 mr-1" />,
    
    // Tools
    'Git': <GitBranch className="w-4 h-4 mr-1" />,
    'Docker': <Package className="w-4 h-4 mr-1" />,
    'Kubernetes': <Cloud className="w-4 h-4 mr-1" />,
    
    // Cloud Platforms
    'Azure': <Cloud className="w-4 h-4 mr-1" />,
  };

  const getSkillIcon = (skillName: string) => {
    return skillIconMapping[skillName] || <FileCode className="w-4 h-4 mr-1" />;
  };

  return (
    <div 
      className={cn(
        "animate-slide-in flex flex-col items-center p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-border/40", 
        className
      )} 
      style={{ animationDelay: `${delay}ms`, opacity: 0 }}
    >
      <div className="flex items-center mb-4">
        {getIcon()}
        <h3 className="font-semibold text-lg">{title}</h3>
      </div>
      <ul className="text-sm space-y-2 w-full">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {getSkillIcon(item)}
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillItem;
