
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';

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
    <div className="mb-12 relative">
      {/* Timeline connector */}
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/80 to-primary/20 z-0"></div>
      
      {/* Timeline dot */}
      <div className="absolute left-4 top-7 w-4 h-4 rounded-full bg-primary z-10 -translate-x-1.5 shadow-[0_0_10px_rgba(var(--primary),0.5)]"></div>
      
      <div className="pl-12 relative z-20">
        <Card className="border border-border/40 shadow-md hover:shadow-lg transition-all duration-300 animate-reveal" style={{ animationDelay: `${delay}ms` }}>
          <CardHeader className="pb-2 bg-gradient-to-r from-primary/10 to-transparent rounded-t-lg">
            <div className="flex items-center mb-2">
              <Briefcase className="w-5 h-5 mr-2 text-primary" />
              <CardTitle className="text-xl">{title}</CardTitle>
            </div>
            <CardDescription className="flex items-center">
              <span className="font-medium text-primary/80">{company}</span>
              <span className="mx-2">•</span>
              <span className="flex items-center text-muted-foreground">
                <Calendar className="w-4 h-4 mr-1" />
                {period}
              </span>
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-4">
            <ul className="space-y-2 text-sm">
              {achievements.map((achievement, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 mr-2 text-primary mt-0.5 flex-shrink-0" />
                  <span>{achievement}</span>
                </li>
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
