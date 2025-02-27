"use client";

import { Instagram, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
	return (
		<footer className="w-full py-8 bg-white border-t border-gray-100">
			<div className="container mx-auto px-4 md:px-6">
				<div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
					{/* Logo and Description */}
					<div className="max-w-md">
						<div className="flex items-center gap-2 mb-4">
							<div className="w-32 h-8 relative">
								<Image
									src="/images/kelasinovatif-clean.png"
									alt="Kelas Inovatif Logo"
									fill
									className="object-contain"
								/>
							</div>
						</div>
						<p className="text-gray-600 text-sm leading-relaxed">
							Platform inovatif untuk mempelajari kecerdasan buatan (AI), dengan
							pendekatan yang terstruktur dan mudah dipahami untuk semua
							kalangan.
						</p>
					</div>

					{/* Social Links */}
					<div className="flex items-center gap-4">
						<Link
							href="https://instagram.com/kelasinovatif"
							target="_blank"
							rel="noopener noreferrer"
							className="text-gray-600 hover:text-[#1E1B4B] transition-colors"
						>
							<Instagram className="w-5 h-5" />
							<span className="sr-only">Instagram</span>
						</Link>
						<Link
							href="https://youtube.com/@kelasinovatif"
							target="_blank"
							rel="noopener noreferrer"
							className="text-gray-600 hover:text-[#1E1B4B] transition-colors"
						>
							<Youtube className="w-5 h-5" />
							<span className="sr-only">YouTube</span>
						</Link>
					</div>
				</div>

				{/* Copyright and Legal */}
				<div className="mt-8 pt-6 border-t border-gray-100">
					<div className="flex flex-col md:flex-row items-center justify-between gap-4">
						<div className="flex flex-col md:flex-row items-center gap-4">
							<p className="text-gray-500 text-sm">
								© 2025 Kelas Inovatif. All rights reserved.
							</p>
							<div className="flex items-center gap-4 md:ml-4">
								<Link
									href="/privacy-policy"
									className="text-gray-500 hover:text-[#1E1B4B] text-sm transition-colors"
								>
									Privacy Policy
								</Link>
								<span className="text-gray-300">•</span>
								<Link
									href="/terms-of-service"
									className="text-gray-500 hover:text-[#1E1B4B] text-sm transition-colors"
								>
									Terms of Service
								</Link>
							</div>
						</div>
						<Link
							href="https://kelasinovatif.com"
							target="_blank"
							rel="noopener noreferrer"
							className="text-[#1E1B4B] hover:text-[#2D2B6B] text-sm font-medium transition-colors"
						>
							kelasinovatif.com
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}
