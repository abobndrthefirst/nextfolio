// components/Layout.tsx

import { ReactNode, useState, useEffect } from 'react';
import Head from 'next/head';
import Header from './Header';

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, title, description }) => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(prefersDark ? 'dark' : 'light');
      document.documentElement.classList.toggle('dark', prefersDark);
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>{title ? `${title} -  Sultan Alhaidar` : ' Sultan Alhaidar'}</title>
        <meta name="description" content={description || 'Welcome to my website'} />
      </Head>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main className="flex-auto p-8">{children}</main>
      <footer className="p-6 border-t border-gray-300 dark:border-gray-700 text-center">
        <div className="text-sm">© 2024 Sultan Alhaidar. All rights reserved.</div>
      </footer>
    </div>
  );
};

export default Layout;
