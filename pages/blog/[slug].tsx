// pages/blog/[slug].tsx

import { FC } from 'react';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';

interface BlogPost {
  title: string;
  date: string;
  content: string;
}

const BlogPostPage: FC = () => {
  const router = useRouter();
  const { slug } = router.query;

  // Placeholder for fetching blog post data based on slug
  const blogPost: BlogPost = {
    title: slug ? (slug as string).replace('-', ' ') : 'Loading...',
    date: 'Date',
    content: 'This is the content of the blog post.',
  };

  if (!slug) {
    return <div>Loading...</div>;
  }

  return (
    <Layout title={blogPost.title} description={blogPost.content.slice(0, 150)}>
      <article className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight">{blogPost.title}</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-6">{blogPost.date}</p>
        <div className="prose dark:prose-dark">
          <p>{blogPost.content}</p>
          {/* Add more content here */}
        </div>
      </article>
    </Layout>
  );
};

export default BlogPostPage;
