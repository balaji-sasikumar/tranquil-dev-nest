
import React, { useEffect } from 'react';
import SocialLinks from './SocialLinks';

const Layout: React.FC = () => {
  useEffect(() => {
    // Add devicon CSS
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css';
    document.head.appendChild(link);
    
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-background relative">
      <div className="max-w-4xl w-full mx-auto">
        <main className="py-8">
          <div id="home" className="mb-16">
            <Home />
          </div>
          <div id="blog" className="mb-16">
            <Blog />
          </div>
          <div id="contact">
            <Contact />
          </div>
        </main>
      </div>
      <SocialLinks 
        linkedinUrl="https://linkedin.com/in/balaji-sasikumar/" 
        githubUrl="https://github.com/balaji-sasikumar"
        devtoUrl="https://dev.to/balajisasikumar"
      />
    </div>
  );
};

// Import components here to avoid circular dependencies
import Home from '../pages/Home';
import Blog from '../pages/Blog';
import Contact from '../pages/Contact';

export default Layout;
