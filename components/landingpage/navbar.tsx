'use client'
import React from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import { Themetoggle } from '../ui/themetoggle';

const menuItems = [
  { name: 'Pricing', href: '#pricing' },
  { name: 'Blogs', href: '#blogs' },
  { name: 'Contacts', href: '#contacts' },
]

const Navbar = () => {
  const [menuState, setMenuState] = React.useState(false)
  return (
    <header>
      <nav
        data-state={menuState && 'active'}
        className="w-full px-2 group">
        <div className="flex space-x-4  items-center py-4">
          <div className='flex '>
            <Image
              src="/logo.png"
              alt="Logo"
              width={30}
              height={10}
              className="mr-2"
            />
            <Link href="/" className="text-2xl font-bold">
              AI Agent
            </Link>
          </div>
          <div className="space-x-4">
            {menuItems.map((item) => (
              <Link key={item.name} href={item.href} className="text-lg">
                {item.name}
              </Link>
            ))}
          </div>
          <Themetoggle />
          <button
            className="md:hidden"
            onClick={() => setMenuState(!menuState)}
          >
            {menuState ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>
    </header>
  )
}
export default Navbar
