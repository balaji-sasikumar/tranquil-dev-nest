export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  content?: string;
  slug: string;
  devtoUrl: string; // Added devtoUrl property
}

export const blogPosts: BlogPost[] = [
  {
    id: 2,
    title: "Inside SQL Joins",
    excerpt:
      "An in-depth guide to understanding SQL joins with practical examples and performance insights.",
    date: "May 15, 2024",
    readTime: "5 min read",
    tags: ["SQL", "Databases", "Backend"],
    slug: "inside-sql-joins",
    content: "This is the full content of the blog post about SQL joins...",
    devtoUrl: "https://dev.to/balajisasikumar/inside-sql-joins-5h6b",
  },
  {
    id: 3,
    title:
      "🎨 Mastering Angular-React Integration: How to Use tldraw Without Losing Your Mind!",
    excerpt:
      "Learn how to integrate tldraw in Angular while maintaining optimal performance and code maintainability.",
    date: "December 1, 2024",
    readTime: "5 min read",
    tags: ["Angular", "React", "tldraw", "Frontend"],
    slug: "angular-react-tldraw-integration",
    content:
      "This is the full content of the blog post about Angular-React integration with tldraw...",
    devtoUrl:
      "https://dev.to/balajisasikumar/integrating-tldraw-react-component-in-an-angular-app-without-losing-your-mind-21i1",
  },
  {
    id: 4,
    title:
      "APIs: How to Stop Torturing Developers and Start Writing Code They Won’t Hate",
    excerpt:
      "Best practices for designing developer-friendly APIs that are easy to use, maintain, and scale.",
    date: "December 30, 2024",
    readTime: "5 min read",
    tags: ["APIs", "Backend", "Best Practices"],
    slug: "developer-friendly-apis",
    content:
      "This is the full content of the blog post about writing better APIs...",
    devtoUrl:
      "https://dev.to/balajisasikumar/apis-how-to-stop-torturing-developers-and-start-writing-code-they-wont-hate-3jjj",
  },
  {
    id: 5,
    title: "Authentication Cheatsheet",
    excerpt:
      "A quick reference guide covering essential authentication techniques and security best practices.",
    date: "February 6, 2025",
    readTime: "5 min read",
    tags: ["Authentication", "Security", "Best Practices"],
    slug: "authentication-cheatsheet",
    content:
      "This is the full content of the blog post about authentication...",
    devtoUrl: "https://dev.to/balajisasikumar/authentication-cheatsheet-35lp",
  },
];
