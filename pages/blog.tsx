// pages/blog.tsx

import { FC } from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';

interface BlogPost {
  title: string;
  date: string;
  description: string;
  slug: string;
}

const Blog: FC = () => {
  // Sample blog posts data
  const blogPosts: BlogPost[] = [
    {
      title: 'Outreaching 101',
      date: 'July 14, 2024',
      description: 'How to reach out to CEOs, board members, and entrepreneurs.',
      slug: 'outreaching-101',
    },
    {
      title: 'Payments 101',
      date: 'June 29, 2024',
      description: 'A guide to understanding payments and payment systems.',
      slug: 'payments-101',
    },
    // Add more blog posts here
  ];

  return (
    <Layout title="Blog" description="Read my latest blog posts">
      <section className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight">Blog</h1>
        <p className="mt-6 text-lg">
          Welcome to my blog! Here you&apos;ll find articles on finance, AI, and more.
        </p>

        {/* Blog Posts List */}
        <div className="mt-8 space-y-12">
          {blogPosts.map((post) => (
            <article key={post.slug}>
              <h2 className="text-2xl font-semibold mb-2">
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  {post.title}
                </Link>
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-2">{post.date}</p>
              <p className="mb-4">{post.description}</p>
              <Link
                href={`/blog/${post.slug}`}
                className="text-teal-500 hover:text-teal-600 dark:hover:text-teal-400"
              >
                Read more →
              </Link>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
