"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

interface NavLinkProps {
	href: string;
	children: ReactNode;
}

const NavLink = ({ href, children }: NavLinkProps) => {
	const pathname = usePathname();
	const isActive = pathname === href;

	return (
		<Link
			href={href}
			className={`
				relative
				px-4 py-2
				text-sm font-medium
				md:text-base
				rounded-full
				transition-all duration-200
				${
					isActive
						? "text-gray-900 bg-gray-100"
						: "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
				}
				md:px-4 md:py-2
				mobile:px-6 mobile:py-3
				focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
				touch-manipulation
			`}
		>
			{children}
		</Link>
	);
};

export default NavLink;
