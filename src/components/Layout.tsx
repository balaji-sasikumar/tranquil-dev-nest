
import React from 'react';
import SocialLinks from './SocialLinks';

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 relative">
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
      <SocialLinks />
    </div>
  );
};

// Import components here to avoid circular dependencies
import Home from '../pages/Home';
import Blog from '../pages/Blog';
import Contact from '../pages/Contact';

export default Layout;
