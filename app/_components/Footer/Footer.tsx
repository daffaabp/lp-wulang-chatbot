"use client";

import { Instagram, Youtube, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
	return (
		<footer className="w-full py-8 bg-white border-t border-gray-100">
			<div className="container mx-auto px-4 md:px-6">
				<div className="flex flex-col md:flex-row items-start justify-between gap-8">
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
							Kelas Inovatif merupakan platform untuk mempelajari kecerdasan buatan (AI), dengan
							pendekatan yang terstruktur dan mudah dipahami untuk semua
							kalangan.
						</p>
					</div>

					{/* Social Links */}
					<div className="flex flex-col items-start gap-4">
						<h3 className="text-[#1E1B4B] font-semibold mb-2">Media Sosial</h3>
						<Link
							href="https://youtube.com/@kelasinovatif"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-2 text-gray-600 hover:text-[#1E1B4B] transition-colors"
						>
							<Youtube className="w-5 h-5" />
							<span className="text-sm">Kelas Inovatif</span>
						</Link>
						<Link
							href="https://instagram.com/kelasinovatif"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-2 text-gray-600 hover:text-[#1E1B4B] transition-colors"
						>
							<Instagram className="w-5 h-5" />
							<span className="text-sm">@kelasinovatif</span>
						</Link>
					</div>

					{/* Contact Section */}
					<div className="flex flex-col items-start">
						<h3 className="text-[#1E1B4B] font-semibold mb-2">Hubungi Kami</h3>
						<Link
							href="https://wa.me/6285712208535"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-2 text-gray-600 hover:text-[#1E1B4B] transition-colors"
						>
							<Phone className="w-4 h-4" />
							<span className="text-sm">+62 857-1220-8535</span>
						</Link>
						<p className="text-gray-500 text-xs mt-1">
							Untuk informasi pembelian dan bantuan
						</p>
					</div>
				</div>

				{/* Copyright and Legal */}
				<div className="mt-8 pt-6 border-t border-gray-100">
					<div className="flex flex-col md:flex-row items-center justify-between gap-4">
						<div className="flex items-center">
							<p className="text-gray-500 text-sm">
								© 2025 <Link href="https://kelasinovatif.com" className="hover:text-[#1E1B4B] transition-colors">Kelas Inovatif</Link>. All rights reserved.
							</p>
						</div>
						<div className="flex items-center gap-4">
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
				</div>
			</div>
		</footer>
	);
}
