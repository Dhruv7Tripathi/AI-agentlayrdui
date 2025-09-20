'use client'

import React from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import { Themetoggle } from './ui/themetoggle';
import { cn } from '@/lib/utils';
import { SiGithub } from 'react-icons/si';
const menuItems = [
  { name: 'Pricing', href: '#pricing' },
  { name: 'Blogs', href: '#blogs' },
  { name: 'Contacts', href: '#contacts' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  return (
    <header className={cn("w-full border-b border-neutral-200 dark:border-neutral-800 z-90 ",
      // scrollY
      //   ? "border-b border-neutral-200/50 dark:border-neutral-800/50 bg-neutral-200/40 dark:bg-neutral-900/40 shadow-lg backdrop-blur-md"
      //   : "border-transparent bg-transparent shadow-none backdrop-blur-none",
    )}>
      <nav className="container mx-auto px-8 py-3 flex items-center justify-between">
        <div className="flex ml-24 items-center space-x-2">
          <Image
            src="/logo.png"
            alt="Logo"
            width={30}
            height={30}
            className="object-contain rounded-xl"
          />
          <Link href="/" className="text-xl font-bold">
            AI Agent
          </Link>
          <div className="hidden md:flex ml-12 space-x-4">
            {menuItems.map((item) => (
              <Link key={item.name} href={item.href} className="text-sm hover:underline">
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="hidden md:flex space-x-2 items-center mr-28">
          <Themetoggle />
          <SiGithub size={22} />
          <div className='font-semibold  flex items-center'>
            <button className=''>
              <Link href="/login" className="ml-4 text-md">
                Login
              </Link>
            </button>
            <button>
              <Link href="/signup" className="ml-4 bg-blue-600 text-md text-white px-4 py-2 rounded-4xl">
                Sign Up
              </Link>
            </button>
          </div>
        </div>

        <div className="md:hidden flex items-center space-x-2">
          <Themetoggle />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          {menuItems.map((item) => (
            <Link key={item.name} href={item.href} className="block text-sm">
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
