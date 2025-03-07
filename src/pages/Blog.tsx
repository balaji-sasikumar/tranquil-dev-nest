
import React from 'react';
import AnimatedText from '@/components/AnimatedText';
import BlogList from '@/components/BlogList';

const Blog: React.FC = () => {
  return (
    <div className="space-y-8">
      <header className="text-center space-y-4 mb-8">
        <AnimatedText 
          text="My Blog" 
          className="text-3xl font-bold"
          animation="fade-in"
        />
        <AnimatedText 
          text="Thoughts, experiences, and tutorials on development"
          className="text-muted-foreground max-w-lg mx-auto"
          delay={400}
        />
      </header>
      
      <BlogList />
    </div>
  );
};

export default Blog;
