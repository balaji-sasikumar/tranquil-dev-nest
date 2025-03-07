
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  delay?: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  description, 
  technologies, 
  features,
  delay = 0
}) => {
  return (
    <Card 
      className="project-card transition-all duration-300 border-none shadow-md animate-reveal"
      style={{ animationDelay: `${delay}ms` }}
    >
      <CardHeader className="pb-2">
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2 mb-3">
          {technologies.map((tech, index) => (
            <Badge key={index} variant="secondary" className="font-normal">
              {tech}
            </Badge>
          ))}
        </div>
        <div className="text-sm text-muted-foreground">
          <p className="font-medium mb-1">Key Features:</p>
          <ul className="list-disc pl-5 space-y-1">
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
