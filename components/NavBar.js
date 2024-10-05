import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="bg-neutral-900 p-4 sticky top-0 w-full flex justify-center">
      <div className="space-x-6">
        <Link href="/">
          <a className="text-white hover:text-accent">Home</a>
        </Link>
        <Link href="/about">
          <a className="text-white hover:text-accent">About</a>
        </Link>
        <Link href="/articles">
          <a className="text-white hover:text-accent">Articles</a>
        </Link>
        <Link href="/projects">
          <a className="text-white hover:text-accent">Projects</a>
        </Link>
      </div>
    </nav>
  );
}
