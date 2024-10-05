// pages/index.tsx

import Layout from '../components/Layout';
import Link from 'next/link';

const Home: React.FC = () => {
  // Sample data for latest blog posts and projects
  const latestBlogPosts = [
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
  ];

  const latestProjects = [
    {
      title: 'Project Alpha',
      description: 'An innovative solution for modern problems.',
      link: '/projects/project-alpha',
    },
    {
      title: 'Project Beta',
      description: 'A revolutionary approach to traditional methods.',
      link: '/projects/project-beta',
    },
  ];

  return (
    <Layout title="Home Page" description="Welcome to the home page">
      {/* Introduction Section */}
      <section className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold tracking-tight">
          Tech Enthusiast, Product Manager, Entrepreneur.
        </h1>
        <p className="mt-6 text-lg">
          I’m Your Name, a Product Manager and entrepreneur based in Riyadh. I’m obsessed with finance
          and technology and passionate about making an impact by building products that transform
          people's financial lives.
        </p>
        {/* Social Media Links */}
        <div className="mt-6 flex justify-center gap-6">
          <a
            href="https://x.com/abobndrthefirst"
            aria-label="Follow on X"
            className="hover:fill-gray-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className="h-6 w-6 fill-gray-500" viewBox="0 0 24 24">
              {/* X (Twitter) Icon */}
              <path d="M13.3174 10.7749L19.1457 4H17.7646L12.7039 9.88256L8.66193 4H4L10.1122 12.8955L4 20H5.38119L10.7254 13.7878L14.994 20H19.656L13.3171 10.7749H13.3174ZM11.4257 12.9738L10.8064 12.0881L5.87886 5.03974H8.00029L11.9769 10.728L12.5962 11.6137L17.7652 19.0075H15.6438L11.4257 12.9742V12.9738Z" />
            </svg>
          </a>
          <a
            href="https://github.com/abobndrthefirst"
            aria-label="Follow on GitHub"
            className="hover:fill-gray-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className="h-6 w-6 fill-gray-500" viewBox="0 0 24 24">
              {/* GitHub Icon */}
              <path d="M12 2C6.475 2 2 6.588 2 12.253c0 4.537 2.862 8.369 6.838 9.727c.5.09.687-.218.687-.487c0-.243-.013-1.05-.013-1.91C7 20.059 6.35 18.957 6.15 18.38c-.113-.295-.6-1.205-1.025-1.448c-.35-.192-.85-.667-.013-.68c.788-.012 1.35.744 1.538 1.051c.9 1.551 2.338 1.116 2.912.846c.088-.666.35-1.115.638-1.371c-2.225-.256-4.55-1.14-4.55-5.062c0-1.115.387-2.038 1.025-2.756c-.1-.256-.45-1.307.1-2.717c0 0 .837-.269 2.75 1.051c.8-.23 1.65-.346 2.5-.346c.85 0 1.7.115 2.5.346c1.912-1.333 2.75-1.05 2.75-1.05c.55 1.409.2 2.46.1 2.716c.637.718 1.025 1.628 1.025 2.756c0 3.934-2.337 4.806-4.562 5.062c.362.32.675.936.675 1.897c0 1.371-.013 2.473-.013 2.82c0 .268.188.589.688.486a10.039 10.039 0 0 0 4.932-3.74A10.447 10.447 0 0 0 22 12.253C22 6.588 17.525 2 12 2Z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/sultan-alhaidar/"
            aria-label="Follow on LinkedIn"
            className="hover:fill-gray-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className="h-6 w-6 fill-gray-500" viewBox="0 0 24 24">
              {/* LinkedIn Icon */}
              <path d="M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278c-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387c2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 01-1.548-1.549a1.548 1.548 0 111.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z" />
            </svg>
          </a>
        </div>
      </section>

      {/* Latest Blog Posts and Projects */}
      <section className="mt-12 max-w-4xl mx-auto">
        {/* Latest Blog Posts */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Latest Blog Posts 📖</h2>
          <div className="space-y-8">
            {latestBlogPosts.map((post) => (
              <article key={post.slug}>
                <h3 className="text-2xl font-semibold text-center">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    {post.title}
                  </Link>
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-center">{post.date}</p>
                <p className="mt-2 text-center">{post.description}</p>
              </article>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link
              href="/blog"
              className="text-teal-500 hover:text-teal-600 dark:hover:text-teal-400"
            >
              View all blog posts →
            </Link>
          </div>
        </div>

        {/* Latest Projects */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Latest Projects 🚀</h2>
          <div className="space-y-8">
            {latestProjects.map((project) => (
              <div key={project.title}>
                <h3 className="text-2xl font-semibold text-center">
                  <Link
                    href={project.link}
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    {project.title}
                  </Link>
                </h3>
                <p className="mt-2 text-center">{project.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link
              href="/projects"
              className="text-teal-500 hover:text-teal-600 dark:hover:text-teal-400"
            >
              View all projects →
            </Link>
          </div>
        </div>

        {/* Newsletter Subscription Box */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Stay up to date</h2>
          <p className="mb-4">Get notified when I publish something new, and unsubscribe at any time.</p>
          <form className="flex flex-col items-center sm:flex-row sm:justify-center">
            <input
              type="email"
              placeholder="Your email"
              className="p-2 w-64 rounded-md border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500 mb-4 sm:mb-0 sm:mr-2"
            />
            <button
              type="submit"
              className="p-2 bg-teal-500 text-white rounded-md hover:bg-teal-600"
            >
              Join
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
