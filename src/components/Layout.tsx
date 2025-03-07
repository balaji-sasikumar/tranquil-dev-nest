
import React from 'react';
import { Outlet } from 'react-router-dom';
import SocialLinks from './SocialLinks';
import PageNav from './PageNav';

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 relative">
      <div className="max-w-4xl w-full mx-auto">
        <main className="py-8">
          <Outlet />
        </main>
        <PageNav />
      </div>
      <SocialLinks />
    </div>
  );
};

export default Layout;
