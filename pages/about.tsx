// pages/about.tsx

import Layout from '../components/Layout';
import { FaXTwitter } from 'react-icons/fa6'; // Import the new X icon
import { FaLinkedin } from 'react-icons/fa';

const About: React.FC = () => {
  return (
    <Layout title="About Me" description="Learn more about me">
      <section className="max-w-3xl mx-auto">
        {/* ... existing content ... */}

        {/* Updated section with icons */}
        <p className="mt-8 text-lg leading-relaxed">You can find me elsewhere on:</p>
        <div className="flex mt-4 space-x-6">
          <a
            href="https://x.com/abobndrthefirst"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X"
            className="text-gray-600 hover:text-teal-500"
          >
            <FaXTwitter className="h-6 w-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/sultan-alhaidar/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-600 hover:text-teal-500"
          >
            <FaLinkedin className="h-6 w-6" />
          </a>
        </div>

        {/* Change background color for the rest of the content */}
        <div className="mt-12 p-6 bg-beige-100 dark:bg-dark-beige">
          {/* Other Interests Section */}
          <h2 className="text-3xl font-bold mb-4">Other Interests</h2>
          <p className="text-lg leading-relaxed mb-6">
            Things that fascinate me, but that I typically don’t write about include...
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Interest Items */}
            {[
              {
                title: 'Charitable Giving',
                content:
                  'In 2017, I began donating 5% of after-tax profit to charitable causes. My primary charity partner is Against Malaria Foundation (AMF)...',
              },
              {
                title: 'Great Speeches',
                content:
                  'As a side project, I like to search for insightful speeches that are not well known...',
              },
              {
                title: 'Travel Photography',
                content:
                  'I’ve taken photos in more than 40 countries. I have many favorite places, including Australia, Iceland, Italy...',
              },
              {
                title: 'Peak Athletic Performances',
                content:
                  'Lezak’s comeback. Secretariat’s Belmont. Auburn’s Kick Six (and the local radio call)...',
              },
              {
                title: 'Architecture',
                content:
                  'I love thoughtful, well-designed buildings. Specifically, I enjoy layouts that blend nature with beautiful and functional homes...',
              },
              {
                title: 'Book Recommendations',
                content:
                  'It’s basically my job to read. After years of research, I created my personal reading list with favorites from a wide range of categories...',
              },
            ].map((interest, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <h3 className="text-2xl font-semibold mb-2">{interest.title}</h3>
                <p className="text-lg leading-relaxed">{interest.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
