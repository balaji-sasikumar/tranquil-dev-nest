
import React from 'react';
import { cn } from '@/lib/utils';

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
  // Map skill names to appropriate icons using devicon
  const getIcon = () => {
    switch(icon) {
      case 'languages':
        return <i className="devicon-javascript-plain colored text-xl mr-2"></i>;
      case 'frameworks':
        return <i className="devicon-react-original colored text-xl mr-2"></i>;
      case 'webTech':
        return <i className="devicon-html5-plain colored text-xl mr-2"></i>;
      case 'database':
        return <i className="devicon-mongodb-plain colored text-xl mr-2"></i>;
      case 'tools':
        return <i className="devicon-git-plain colored text-xl mr-2"></i>;
      case 'cloud':
        return <i className="devicon-azure-plain colored text-xl mr-2"></i>;
      default:
        return <i className="devicon-javascript-plain colored text-xl mr-2"></i>;
    }
  };

  // Map individual skill items to devicon icons
  const getSkillIcon = (skillName: string) => {
    switch(skillName) {
      // Languages
      case 'TypeScript':
        return <i className="devicon-typescript-plain colored text-2xl mr-3"></i>;
      case 'Python':
        return <i className="devicon-python-plain colored text-2xl mr-3"></i>;
      case 'C#':
        return <i className="devicon-csharp-plain colored text-2xl mr-3"></i>;
      case 'JavaScript':
        return <i className="devicon-javascript-plain colored text-2xl mr-3"></i>;
      
      // Frameworks
      case 'Node.js':
        return <i className="devicon-nodejs-plain colored text-2xl mr-3"></i>;
      case 'React':
        return <i className="devicon-react-original colored text-2xl mr-3"></i>;
      case 'Angular':
        return <i className="devicon-angularjs-plain colored text-2xl mr-3"></i>;
      case 'Ionic':
        return <i className="devicon-ionic-original colored text-2xl mr-3"></i>;
      case 'Electron':
        return <i className="devicon-electron-original colored text-2xl mr-3"></i>;
      
      // Web Technologies
      case 'Bootstrap':
        return <i className="devicon-bootstrap-plain colored text-2xl mr-3"></i>;
      case 'Tailwind CSS':
        return <i className="devicon-tailwindcss-plain colored text-2xl mr-3"></i>;
      case 'Material-UI':
        return <i className="devicon-materialui-plain colored text-2xl mr-3"></i>;
      
      // Database
      case 'MongoDB':
        return <i className="devicon-mongodb-plain colored text-2xl mr-3"></i>;
      case 'SQL':
        return <i className="devicon-mysql-plain colored text-2xl mr-3"></i>;
      
      // Tools
      case 'Git':
        return <i className="devicon-git-plain colored text-2xl mr-3"></i>;
      case 'Docker':
        return <i className="devicon-docker-plain colored text-2xl mr-3"></i>;
      case 'Kubernetes':
        return <i className="devicon-kubernetes-plain colored text-2xl mr-3"></i>;
      
      // Cloud Platforms
      case 'Azure':
        return <i className="devicon-azure-plain colored text-2xl mr-3"></i>;
        
      default:
        return <i className="devicon-github-original colored text-2xl mr-3"></i>;
    }
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
      <ul className="text-sm space-y-4 w-full">
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
