"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import NavLink from "./Navlink";

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	// Handle scroll effect
	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 20);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	// Handle route change (close menu)
	useEffect(() => {
		setIsOpen(false);
	}, []);

	// Handle menu toggle
	const toggleMenu = () => {
		setIsOpen(!isOpen);
		// Toggle body scroll
		document.body.style.overflow = !isOpen ? "hidden" : "auto";
	};

	return (
		<>
			{/* Mobile Menu Overlay */}
			<div
				className={`
					fixed inset-0 
					bg-white
					z-[100]
					transition-all duration-300 ease-in-out
					md:hidden
					${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
				`}
				aria-hidden={!isOpen}
			>
				{/* Mobile Menu Content */}
				<nav className="h-[100dvh] w-full flex flex-col items-center justify-center space-y-8 p-8">
					<NavLink href="#about">About</NavLink>
					<NavLink href="#products">Products</NavLink>
					<NavLink href="#blog">Blog</NavLink>
					<NavLink href="#faq">FAQ</NavLink>
				</nav>
			</div>

			<header
				className={`
					fixed top-0 left-0 right-0 w-full z-[101]
					transition-all duration-300 ease-in-out
					${scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"}
				`}
			>
				<div className="container mx-auto flex items-center h-[56px] md:h-[64px] px-4 md:px-6 lg:px-8 relative">
					{/* Logo Section - Always Visible */}
					<div className="flex-shrink-0 flex items-center gap-2">
						<div className="w-8 h-8 md:w-10 md:h-10 relative transition-transform duration-200 hover:scale-105">
							<Image
								src="/images/wulangai2.jpg"
								alt="Wulang AI Logo"
								fill
								className="object-contain rounded-lg"
								priority
							/>
						</div>
						<span className="text-xl md:text-2xl font-bold text-[#1E1B4B] font-sulphur-point">
							Wulang
						</span>
					</div>

					{/* Desktop Navigation - Centered */}
					<nav className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
						<div className="inline-flex items-center gap-1 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 px-2 py-1.5 shadow-sm">
							<NavLink href="#about">About</NavLink>
							<NavLink href="#products">Products</NavLink>
							<NavLink href="#blog">Blog</NavLink>
							<NavLink href="#faq">FAQ</NavLink>
						</div>
					</nav>

					{/* Mobile Hamburger Button */}
					<button
						type="button"
						onClick={toggleMenu}
						className="md:hidden w-12 h-12 flex flex-col items-center justify-center rounded-full hover:bg-gray-100 active:bg-gray-200 transition-colors duration-200 ml-auto"
						aria-label="Toggle menu"
						aria-expanded={isOpen}
					>
						<div
							className={`w-6 h-0.5 bg-gray-600 transition-all duration-300 ease-in-out ${
								isOpen ? "rotate-45 translate-y-1.5" : ""
							}`}
						/>
						<div
							className={`w-6 h-0.5 bg-gray-600 mt-1.5 transition-all duration-300 ease-in-out ${
								isOpen ? "opacity-0" : ""
							}`}
						/>
						<div
							className={`w-6 h-0.5 bg-gray-600 mt-1.5 transition-all duration-300 ease-in-out ${
								isOpen ? "-rotate-45 -translate-y-1.5" : ""
							}`}
						/>
					</button>

					{/* Empty div for desktop layout balance - Hidden on mobile */}
					<div className="hidden md:block w-[96px] flex-shrink-0" />
				</div>
			</header>
		</>
	);
};

export default Header;
