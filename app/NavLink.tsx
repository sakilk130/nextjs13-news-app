import Link from 'next/link';
import { FC } from 'react';

type NavLinkProps = {
  href: string;
  isActive?: boolean;
};
const NavLink: FC<NavLinkProps> = ({ href, isActive }) => {
  return (
    <Link
      href={`/news/${href}`}
      className={`${
        isActive && 'underline decoration-orange-400 underline-offset-4'
      } p-4 text-center capitalize transition-transform duration-200 ease-out rounded-full hover:scale-110 decoration-orange-400 hover:underline decoration-2 active:underline underline-offset-8 hover:font-bold`}
    >
      {href}
    </Link>
  );
};

export default NavLink;
