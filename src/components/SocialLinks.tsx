
import React from 'react';
import { Linkedin, Github, Code2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SocialLinks: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col space-y-3 z-50">
      <Button
        variant="outline"
        size="icon"
        className="rounded-full w-12 h-12 bg-white shadow-md hover:shadow-lg transition-all hover:bg-accent"
        onClick={() => window.open('https://linkedin.com/in/balaji-sasikumar/', '_blank')}
        aria-label="LinkedIn"
      >
        <Linkedin className="h-5 w-5" />
      </Button>
      
      <Button
        variant="outline"
        size="icon"
        className="rounded-full w-12 h-12 bg-white shadow-md hover:shadow-lg transition-all hover:bg-accent"
        onClick={() => window.open('https://github.com/balaji-sasikumar', '_blank')}
        aria-label="GitHub"
      >
        <Github className="h-5 w-5" />
      </Button>
      
      <Button
        variant="outline"
        size="icon"
        className="rounded-full w-12 h-12 bg-white shadow-md hover:shadow-lg transition-all hover:bg-accent"
        onClick={() => window.open('https://dev.to/', '_blank')}
        aria-label="Dev.to"
      >
        <Code2 className="h-5 w-5" />
      </Button>
    </div>
  );
};

export default SocialLinks;
