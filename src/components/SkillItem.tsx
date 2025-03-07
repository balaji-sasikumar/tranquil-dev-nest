
import React from "react";
import { cn } from "@/lib/utils";

interface SkillItemProps {
  title: string;
  items: string[];
  className?: string;
  delay?: number;
}

const SkillItem: React.FC<SkillItemProps> = ({
  title,
  items,
  className,
  delay = 0,
}) => {
  // Map individual skill items to devicon icons
  const getSkillIcon = (skillName: string) => {
    switch (skillName) {
      // Languages
      case "TypeScript":
        return (
          <i className="devicon-typescript-plain colored text-3xl mr-4"></i>
        );
      case "Python":
        return <i className="devicon-python-plain colored text-3xl mr-4"></i>;
      case "C#":
        return <i className="devicon-csharp-plain colored text-3xl mr-4"></i>;
      case "JavaScript":
        return (
          <i className="devicon-javascript-plain colored text-3xl mr-4"></i>
        );

      // Frameworks
      case "Node.js":
        return <i className="devicon-nodejs-plain colored text-3xl mr-4"></i>;
      case "React":
        return <i className="devicon-react-original colored text-3xl mr-4"></i>;
      case "Angular":
        return (
          <i className="devicon-angularjs-plain colored text-3xl mr-4"></i>
        );
      case "Ionic":
        return <i className="devicon-ionic-original colored text-3xl mr-4"></i>;
      case "Electron":
        return (
          <i className="devicon-electron-original colored text-3xl mr-4"></i>
        );

      // Web Technologies
      case "Bootstrap":
        return (
          <i className="devicon-bootstrap-plain colored text-3xl mr-4"></i>
        );
      case "Tailwind CSS":
        return (
          <i className="devicon-tailwindcss-plain colored text-3xl mr-4"></i>
        );
      case "Material-UI":
        return (
          <i className="devicon-materialui-plain colored text-3xl mr-4"></i>
        );

      // Database
      case "MongoDB":
        return <i className="devicon-mongodb-plain colored text-3xl mr-4"></i>;
      case "SQL":
        return <i className="devicon-mysql-plain colored text-3xl mr-4"></i>;

      // Tools
      case "Git":
        return <i className="devicon-git-plain colored text-3xl mr-4"></i>;
      case "Docker":
        return <i className="devicon-docker-plain colored text-3xl mr-4"></i>;
      case "Kubernetes":
        return (
          <i className="devicon-kubernetes-plain colored text-3xl mr-4"></i>
        );

      // Cloud Platforms
      case "Azure":
        return <i className="devicon-azure-plain colored text-3xl mr-4"></i>;

      default:
        return (
          <i className="devicon-github-original colored text-3xl mr-4"></i>
        );
    }
  };

  return (
    <div
      className={cn(
        "animate-slide-in flex flex-col items-center p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-border/40 bg-white/80",
        className
      )}
      style={{ animationDelay: `${delay}ms`, opacity: 0 }}
    >
      <div className="flex items-center mb-4">
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
