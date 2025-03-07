
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Building Secure Applications with Azure AD B2C',
    excerpt: 'A deep dive into implementing Azure AD B2C for authentication and authorization in modern web applications.',
    date: 'September 15, 2023',
    readTime: '8 min read',
    tags: ['Azure', 'Authentication', 'Security']
  },
  {
    id: 2,
    title: 'Migrating from .NET & SQL to Node.js & MongoDB',
    excerpt: 'Lessons learned and performance improvements from our recent migration project.',
    date: 'July 21, 2023',
    readTime: '10 min read',
    tags: ['Node.js', 'MongoDB', 'Migration']
  },
  {
    id: 3,
    title: 'Building Electron Apps with React and Material-UI',
    excerpt: 'A step-by-step guide to creating desktop applications using web technologies.',
    date: 'May 5, 2023',
    readTime: '12 min read',
    tags: ['Electron', 'React', 'Desktop Apps']
  }
];

const BlogList: React.FC = () => {
  return (
    <div className="space-y-6 animate-fade-up">
      {blogPosts.map((post, index) => (
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
            <Button variant="ghost" size="sm">
              Read More →
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default BlogList;
