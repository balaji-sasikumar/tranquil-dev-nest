
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, Calendar } from 'lucide-react';

interface TimelineItemProps {
  title: string;
  company: string;
  period: string;
  achievements: string[];
  delay?: number;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ 
  title, 
  company, 
  period, 
  achievements,
  delay = 0
}) => {
  return (
    <div className="mb-8 relative">
      {/* Timeline connector */}
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border z-0"></div>
      
      {/* Timeline dot */}
      <div className="absolute left-4 top-7 w-2.5 h-2.5 rounded-full bg-primary z-10 -translate-x-1"></div>
      
      <div className="pl-12 relative z-20">
        <Card className="border-none shadow-md animate-reveal" style={{ animationDelay: `${delay}ms` }}>
          <CardHeader className="pb-2">
            <div className="flex items-center mb-2">
              <Briefcase className="w-5 h-5 mr-2 text-primary" />
              <CardTitle className="text-xl">{title}</CardTitle>
            </div>
            <CardDescription className="flex items-center">
              <span>{company}</span>
              <span className="mx-2">•</span>
              <span className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                {period}
              </span>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              {achievements.map((achievement, index) => (
                <li key={index}>{achievement}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

interface ExperienceTimelineProps {
  experiences: Array<{
    title: string;
    company: string;
    period: string;
    achievements: string[];
  }>;
}

const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({ experiences }) => {
  return (
    <div className="relative">
      {experiences.map((exp, index) => (
        <TimelineItem
          key={index}
          title={exp.title}
          company={exp.company}
          period={exp.period}
          achievements={exp.achievements}
          delay={index * 200}
        />
      ))}
    </div>
  );
};

export default ExperienceTimeline;
