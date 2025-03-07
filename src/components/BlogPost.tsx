
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { blogPosts } from '@/data/blogPosts';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  const post = blogPosts.find((post) => post.slug === slug);
  
  if (!post) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <h1 className="text-2xl font-bold mb-4">Blog Post Not Found</h1>
        <Button onClick={() => navigate('/blog')}>
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
        </Button>
      </div>
    );
  }
  
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <Button 
        variant="ghost" 
        onClick={() => navigate('/blog')}
        className="mb-6"
      >
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
      </Button>
      
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">{post.title}</CardTitle>
          <div className="text-sm text-muted-foreground mt-2">
            {post.date} • {post.readTime}
          </div>
          <div className="flex gap-2 mt-3">
            {post.tags.map((tag, i) => (
              <span key={i} className="text-xs px-2 py-1 bg-secondary rounded-md">
                {tag}
              </span>
            ))}
          </div>
        </CardHeader>
        <CardContent>
          <div className="prose max-w-none">
            {post.content || "Full content coming soon..."}
          </div>
        </CardContent>
        <CardFooter className="border-t pt-6">
          <div className="text-sm text-muted-foreground">
            Thank you for reading!
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default BlogPost;
