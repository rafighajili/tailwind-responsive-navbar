import clsx from 'clsx';
import Button from './Button';
import { useRef, useState } from 'react';
import useOnClickOutside from '../hooks/useOnClickOutside';
import useWindowSize from '../hooks/useWindowSize';

const links = [
  ['#', 'Home'],
  ['#', 'About'],
  ['#', 'Pricing'],
  ['#', 'Contact'],
];

export default function Navbar() {
  const navRef = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const { width } = useWindowSize();

  useOnClickOutside(navRef, () => setIsOpen(false));

  return (
    <nav ref={navRef} className="sticky top-0 bg-neutral-900">
      <div className="container h-24 flex items-center py-6">
        <span className="text-4xl font-bold select-none mr-auto">Logo</span>

        <div
          className={clsx(
            'flex items-center',
            width > 1024
              ? 'gap-x-8'
              : clsx('fixed right-[5vw] backdrop-blur-lg border border-white flex-col gap-y-4 w-64 p-4 rounded-3xl z-10 duration-300', isOpen ? 'top-28 opacity-100' : 'top-14 opacity-0 pointer-events-none')
          )}
        >
          <ul className="flex max-lg:flex-col max-lg:gap-y-4 max-lg:items-center lg:gap-x-8">
            {links.map(([href, text]) => (
              <li key={text}>
                <a href={href} className="hover:text-neutral-400">
                  {text}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex gap-4 max-lg:flex-col">
            <Button>Sign up</Button>
            <Button outlined>Sign in</Button>
          </div>
        </div>

        <Button outlined className="lg:hidden relative !px-0 aspect-square" onClick={() => setIsOpen((prev) => !prev)}>
          <span className={clsx('absolute left-1/2 -translate-x-1/2 w-4 h-px bg-white duration-300', isOpen ? 'rotate-45 top-1/2 -translate-y-1/2' : 'top-3.5')} />
          <span className={clsx('absolute left-1/2 -translate-x-1/2 w-4 h-px bg-white duration-300', isOpen ? '-rotate-45 bottom-1/2 translate-y-1/2' : 'bottom-3.5')} />
        </Button>
      </div>
    </nav>
  );
}
