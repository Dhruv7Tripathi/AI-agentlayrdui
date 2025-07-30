'use client'

import React from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import { Themetoggle } from './ui/themetoggle';

const menuItems = [
  { name: 'Pricing', href: '#pricing' },
  { name: 'Blogs', href: '#blogs' },
  { name: 'Contacts', href: '#contacts' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <header className="w-full border-b">
      <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo + Title */}
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

        <div className="hidden md:flex items-center mr-28">
          <Themetoggle />
          <div className='font-semibold  flex items-center'>
            <button className='ml-4'>
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

      {/* Mobile Nav Dropdown */}
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
