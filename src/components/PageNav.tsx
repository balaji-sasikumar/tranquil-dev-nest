
import React from 'react';
import { NavLink } from 'react-router-dom';
import { cn } from '@/lib/utils';

const PageNav: React.FC = () => {
  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <nav className="flex justify-center mb-8 mt-12">
      <div className="flex space-x-6">
        {navItems.map(item => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => cn(
              "px-4 py-2 font-medium relative transition-colors duration-200",
              "after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-primary after:bottom-0 after:left-0",
              "hover:after:w-full after:transition-all after:duration-300",
              isActive ? "text-primary font-semibold after:w-full" : "text-muted-foreground"
            )}
          >
            {item.label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default PageNav;
