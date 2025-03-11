
import React from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, BookOpen } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { useTheme } from "@/context/ThemeProvider";

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
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="fixed bottom-6 right-6 flex flex-col space-y-3 z-50">
      <Button
        variant="outline"
        size="icon"
        className="rounded-full w-12 h-12 bg-card shadow-md hover:shadow-lg transition-all hover:bg-accent"
        onClick={toggleTheme}
        aria-label="Toggle theme"
      >
        {theme === "dark" ? (
          <i className="text-xl">🌙</i>
        ) : (
          <i className="text-xl">☀️</i>
        )}
      </Button>
      
      <Button
        variant="outline"
        size="icon"
        className="rounded-full w-12 h-12 bg-card shadow-md hover:shadow-lg transition-all hover:bg-accent"
        onClick={() => window.open(linkedinUrl, "_blank")}
        aria-label="LinkedIn"
      >
        <Linkedin className="h-5 w-5" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="rounded-full w-12 h-12 bg-card shadow-md hover:shadow-lg transition-all hover:bg-accent"
        onClick={() => window.open(githubUrl, "_blank")}
        aria-label="GitHub"
      >
        <Github className="h-5 w-5" />
      </Button>
      
      <Button
        variant="outline"
        size="icon"
        className="rounded-full w-12 h-12 bg-card shadow-md hover:shadow-lg transition-all hover:bg-accent"
        onClick={() => window.open(devtoUrl, '_blank')}
        aria-label="Dev.to"
      >
        <BookOpen className="h-5 w-5" />
      </Button>
    </div>
  );
};

export default SocialLinks;
