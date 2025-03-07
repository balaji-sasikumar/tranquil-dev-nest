import React from "react";
import { Button } from "@/components/ui/button";

interface SocialLinksProps {
  linkedinUrl: string;
  githubUrl: string;
  devtoUrl: string;
}

const SocialLinks: React.FC<SocialLinksProps> = ({
  linkedinUrl,
  githubUrl,
  devtoUrl,
}) => {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col space-y-3 z-50">
      <Button
        variant="outline"
        size="icon"
        className="rounded-full w-12 h-12 bg-white shadow-md hover:shadow-lg transition-all hover:bg-accent"
        onClick={() => window.open(linkedinUrl, "_blank")}
        aria-label="LinkedIn"
      >
        <i className="devicon-linkedin-plain text-xl"></i>
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="rounded-full w-12 h-12 bg-white shadow-md hover:shadow-lg transition-all hover:bg-accent"
        onClick={() => window.open(githubUrl, "_blank")}
        aria-label="GitHub"
      >
        <i className="devicon-github-original text-xl"></i>
      </Button>
      {/*       
      <Button
        variant="outline"
        size="icon"
        className="rounded-full w-12 h-12 bg-white shadow-md hover:shadow-lg transition-all hover:bg-accent"
        onClick={() => window.open(devtoUrl, '_blank')}
        aria-label="Dev.to"
      >
        <i className="devicon-devto-plain text-xl"></i>
      </Button> */}
    </div>
  );
};

export default SocialLinks;
