import type { ReactNode } from "react";
import Link from "next/link";

interface NavLinkProps {
  href: string;
  children: ReactNode;
}

const NavLink = ({ href, children }: NavLinkProps) => {
  return (
    <Link
      href={href}
      className="text-sm font-semibold text-gray-600 hover:text-gray-900"
    >
      {children}
    </Link>
  );
};

export default NavLink;
