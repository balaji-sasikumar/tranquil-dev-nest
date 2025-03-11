
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
    id: 1,
    title: 'Building Secure Applications with Azure AD B2C',
    excerpt: 'A deep dive into implementing Azure AD B2C for authentication and authorization in modern web applications.',
    date: 'September 15, 2023',
    readTime: '8 min read',
    tags: ['Azure', 'Authentication', 'Security'],
    slug: 'secure-applications-azure-ad-b2c',
    content: 'This is the full content of the blog post about Azure AD B2C...',
    devtoUrl: 'https://dev.to/balajisasikumar/building-secure-applications-with-azure-ad-b2c'
  },
  {
    id: 2,
    title: 'Migrating from .NET & SQL to Node.js & MongoDB',
    excerpt: 'Lessons learned and performance improvements from our recent migration project.',
    date: 'July 21, 2023',
    readTime: '10 min read',
    tags: ['Node.js', 'MongoDB', 'Migration'],
    slug: 'migrating-dotnet-sql-to-nodejs-mongodb',
    content: 'This is the full content of the blog post about migration...',
    devtoUrl: 'https://dev.to/balajisasikumar/migrating-from-net-sql-to-nodejs-mongodb'
  },
  {
    id: 3,
    title: 'Building Electron Apps with React and Material-UI',
    excerpt: 'A step-by-step guide to creating desktop applications using web technologies.',
    date: 'May 5, 2023',
    readTime: '12 min read',
    tags: ['Electron', 'React', 'Desktop Apps'],
    slug: 'building-electron-apps-react-material-ui',
    content: 'This is the full content of the blog post about Electron apps...',
    devtoUrl: 'https://dev.to/balajisasikumar/building-electron-apps-with-react-and-material-ui'
  }
];
