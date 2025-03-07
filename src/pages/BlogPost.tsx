
import React from 'react';
import BlogPostComponent from '@/components/BlogPost';
import AnimatedText from '@/components/AnimatedText';

const BlogPost: React.FC = () => {
  return (
    <div className="space-y-8">
      <header className="text-center space-y-4 mb-8">
        <AnimatedText 
          text="Blog Post" 
          className="text-3xl font-bold"
          animation="fade-in"
        />
      </header>
      
      <BlogPostComponent />
    </div>
  );
};

export default BlogPost;
