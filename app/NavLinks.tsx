'use client';

import { usePathname } from 'next/navigation';
import { categories } from '../constants';
import NavLink from './NavLink';
const NavLinks = () => {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname?.split('/').pop() === path;
  };

  return (
    <nav className="grid max-w-6xl grid-cols-3 gap-4 mx-auto border-b md:grid-cols-7 text-sx md:text-sm">
      {categories.map((category) => (
        <NavLink key={category} href={category} isActive={isActive(category)} />
      ))}
    </nav>
  );
};

export default NavLinks;
