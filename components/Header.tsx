import Link from 'next/link';
import Image from 'next/image';

interface HeaderProps {
  theme: string;
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ theme, toggleTheme }) => {
  return (
    <header className="w-full flex justify-between p-6 items-center">
      <Link href="/">
        <Image
          src="/images/avatar.jpg"
          alt="Avatar"
          width={64}
          height={64}
          className="rounded-full cursor-pointer"
          priority
        />
      </Link>

      {/* Navigation */}
      <nav>
        <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
          <li>
            <Link
              href="/about"
              className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/articles"
              className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
            >
              Articles
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              href="/newsletter"
              className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
            >
              Newsletter
            </Link>
          </li>
        </ul>
      </nav>

      {/* Theme Toggle Button */}
      <button
        type="button"
        onClick={toggleTheme}
        className="p-2 rounded-full bg-gray-200 dark:bg-gray-800"
        aria-label="Switch Theme"
      >
        {theme === 'dark' ? '🌞' : '🌜'}
      </button>
    </header>
  );
};

export default Header;