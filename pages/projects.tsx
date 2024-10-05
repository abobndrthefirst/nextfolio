// pages/projects.tsx

import Layout from '../components/Layout';

const Projects: React.FC = () => {
  return (
    <Layout title="Projects" description="Projects page">
      <section className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight">Projects</h1>
        <p className="mt-6 text-lg">
          Welcome to my projects page. Here, you&apos;ll find a selection of projects I&apos;ve worked on.
        </p>
        {/* Add your projects here */}
      </section>
    </Layout>
  );
};

export default Projects;
