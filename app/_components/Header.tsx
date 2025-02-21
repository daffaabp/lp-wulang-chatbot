import { Menu, Sparkles } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Header() {
	return (
		<header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-slate-100">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					{/* Logo */}
					<Link href="/" className="flex items-center space-x-2">
						<Sparkles className="w-8 h-8 text-purple-500" />
						<span className="text-xl font-semibold text-slate-900">
							Wulang AI
						</span>
					</Link>

					{/* Desktop Navigation */}
					<nav className="hidden md:flex items-center space-x-8">
						<Link
							href="/features"
							className="text-slate-600 hover:text-slate-900 transition-colors"
						>
							Features
						</Link>
						<Link
							href="/about"
							className="text-slate-600 hover:text-slate-900 transition-colors"
						>
							About
						</Link>
						<Link
							href="/pricing"
							className="text-slate-600 hover:text-slate-900 transition-colors"
						>
							Pricing
						</Link>
						<Link
							href="/integrations"
							className="text-slate-600 hover:text-slate-900 transition-colors"
						>
							Integrations
						</Link>
					</nav>

					{/* Mobile Menu Button */}
					<button 
						type="button"
						className="md:hidden p-2 rounded-lg hover:bg-slate-100"
						aria-label="Toggle mobile menu"
					>
						<Menu className="w-6 h-6 text-slate-600" />
					</button>
				</div>
			</div>
		</header>
	);
}
