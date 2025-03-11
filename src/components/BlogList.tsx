
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { blogPosts } from '@/data/blogPosts';

const BlogList: React.FC = () => {
  const handleReadMore = (devtoUrl: string) => {
    // Open the dev.to URL in a new tab
    window.open(devtoUrl, '_blank');
  };

  return (
    <div className="space-y-6 animate-fade-up">
      {blogPosts.map((post) => (
        <Card key={post.id} className="hover:shadow-md transition-all">
          <CardHeader className="pb-3">
            <CardTitle className="text-xl">{post.title}</CardTitle>
            <CardDescription>
              {post.date} • {post.readTime}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">{post.excerpt}</p>
            <div className="flex gap-2 mt-3">
              {post.tags.map((tag, i) => (
                <span key={i} className="text-xs px-2 py-1 bg-secondary rounded-md">
                  {tag}
                </span>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => handleReadMore(post.devtoUrl)}
            >
              Read More →
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default BlogList;
