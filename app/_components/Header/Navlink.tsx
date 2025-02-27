"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface NavLinkProps {
	href: string;
	children: React.ReactNode;
}

export default function NavLink({ href, children }: NavLinkProps) {
	const pathname = usePathname();
	const isHome = pathname === "/";
	const [isActive, setIsActive] = useState(false);

	// If we're not on home page and the href is a hash link,
	// we need to navigate to home first
	const fullHref = !isHome && href.startsWith("#") ? `/${href}` : href;

	useEffect(() => {
		if (!href.startsWith("#")) return;

		const sectionId = href.slice(1); // Remove # from href
		const section = document.getElementById(sectionId);

		if (!section) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				// Add some buffer to make the active state more natural
				if (entry.isIntersecting) {
					setIsActive(true);
				} else {
					setIsActive(false);
				}
			},
			{
				rootMargin: "-50% 0px -50% 0px", // Activate when section is in middle of viewport
				threshold: 0,
			},
		);

		observer.observe(section);

		return () => {
			observer.unobserve(section);
		};
	}, [href]);

	return (
		<Link
			href={fullHref}
			className={`
				px-4 py-1.5
				text-[#1E1B4B] font-medium
				hover:text-[#2D2B6B]
				transition-all
				rounded-full
				${
					isActive
						? "bg-[#1E1B4B] text-white hover:text-white hover:bg-[#2D2B6B]"
						: "hover:bg-gray-100 active:bg-gray-200"
				}
			`}
		>
			{children}
		</Link>
	);
}
