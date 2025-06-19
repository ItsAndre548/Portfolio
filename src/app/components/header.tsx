import Link from 'next/link';

export default function Header() {
  return (
    <div>
        <header className="flex items-center justify-between h-16 px-4 mx-auto max-w-7xl border-b-1 borter-bottom-white">
            <p></p>
            <nav className="items-center justify-center  space-x-2 sm:space-x-8 md:flex">
                <Link href="/">
                <p className="relative inline-block transition-all ease-out duration-300 opacity-80 hover:opacity-100 nav-link">HOME</p>
                </Link>
            </nav>
    </header>
    </div>
  );
}
