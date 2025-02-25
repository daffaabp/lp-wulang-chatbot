"use client";

import { motion } from "framer-motion";
import {
	ArrowRight,
	MessageSquare,
	Mic,
	Monitor,
	Pen,
	Smartphone,
	Sparkles,
} from "lucide-react";
import Link from "next/link";

const products = [
	{
		title: "Wulang Chat",
		description:
			"Platform percakapan AI interaktif untuk bantuan penulisan karya ilmiah dengan teknologi NLP canggih.",
		icon: <MessageSquare className="w-5 h-5" />,
		url: "https://chat.kelasinovatif.com",
		gradient: "from-[#E5D5F5] via-[#ECE7F5] to-[#F3F0F5]",
		iconBg: "bg-gradient-to-br from-blue-500 to-blue-600",
	},
	{
		title: "Wulang Asisten",
		description:
			"Suite tools AI untuk membantu dari proposal hingga kerangka tulisan dengan pendekatan komprehensif.",
		icon: <Sparkles className="w-5 h-5" />,
		url: "https://asisten.kelasinovatif.com",
		gradient: "from-[#F8E3D0] via-[#F5EBE0] to-[#F5F0E0]",
		iconBg: "bg-gradient-to-br from-purple-500 to-purple-600",
	},
	{
		title: "Wulang Voice",
		description:
			"Interaksi suara intuitif untuk pengalaman penulisan yang lebih natural dan dinamis.",
		icon: <Mic className="w-5 h-5" />,
		url: "https://voice.kelasinovatif.com",
		gradient: "from-[#E5D5F5] via-[#F0E5F0] to-[#F8E3D0]",
		iconBg: "bg-gradient-to-br from-orange-500 to-orange-600",
	},
	{
		title: "Wulang Writer",
		description:
			"Aplikasi AI untuk pembuatan konten akademik dengan cepat dan efisien melalui instruksi sederhana.",
		icon: <Pen className="w-5 h-5" />,
		url: "https://writer.kelasinovatif.com",
		gradient: "from-[#F8E3D0] via-[#F0E5F0] to-[#E5D5F5]",
		iconBg: "bg-gradient-to-br from-emerald-500 to-emerald-600",
	},
	{
		title: "Wulang Chat WA",
		description:
			"Chatbot AI terintegrasi dengan WhatsApp untuk kolaborasi penulisan ilmiah yang lebih mudah dan familiar.",
		icon: <Smartphone className="w-5 h-5" />,
		url: "https://chatwa.kelasinovatif.com",
		gradient: "from-[#E5D5F5] via-[#E8E0F0] to-[#F0E5F0]",
		iconBg: "bg-gradient-to-br from-green-500 to-green-600",
	},
	{
		title: "Wulang Office",
		description:
			"Aplikasi desktop untuk pengalaman penulisan karya ilmiah yang lebih powerful. (Coming Soon)",
		icon: <Monitor className="w-5 h-5" />,
		url: "https://office.kelasinovatif.com",
		gradient: "from-[#F0E5F0] via-[#E8E8E8] to-[#E5E5E5]",
		iconBg: "bg-gradient-to-br from-gray-600 to-gray-700",
		comingSoon: true,
	},
];

export default function Products() {
	return (
		<section id="products" className="py-16 md:py-24 overflow-hidden bg-gradient-to-b from-[#F6F6F6] via-[#F8F8F8] to-[#FFFFFF]">
			<div className="container mx-auto px-4 md:px-6">
				{/* Section Header */}
				<div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						className="text-3xl md:text-4xl font-bold text-[#1E1B4B] mb-4 font-sulphur-point"
					>
						Produk Wulang AI
					</motion.h2>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.1 }}
						className="text-[#4B5563] text-lg font-poppins"
					>
						Rangkaian solusi AI terpadu untuk membantu penulisan karya ilmiah
						Anda
					</motion.p>
				</div>

				{/* Products Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
					{products.map((product, index) => (
						<motion.div
							key={product.title}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
						>
							<Link
								href={product.url}
								className={`
									block relative overflow-hidden
									rounded-2xl
									p-6 md:p-8
									border border-[#E5D5F5]/20
									bg-gradient-to-br ${product.gradient}
									${
										product.comingSoon
											? "cursor-not-allowed opacity-75"
											: "hover:shadow-lg hover:shadow-[#E5D5F5]/20 hover:-translate-y-1"
									}
									transition-all duration-300
									group
									font-poppins
								`}
							>
								{/* Product Icon */}
								<div
									className={`
										${product.iconBg} 
										w-12 h-12
										rounded-xl
										flex items-center justify-center 
										text-white 
										mb-4
										shadow-lg shadow-[#E5D5F5]/20
										group-hover:scale-110
										transition-transform duration-300
									`}
								>
									{product.icon}
								</div>

								{/* Product Title */}
								<h3 className="text-xl md:text-2xl font-bold text-[#1E1B4B] mb-2 font-sulphur-point">
									{product.title}
								</h3>

								{/* Product Description */}
								<p className="text-[#4B5563] mb-4 font-poppins leading-relaxed">
									{product.description}
								</p>

								{/* Call to Action */}
								<div className="flex items-center text-[#1E1B4B] font-medium font-poppins">
									<span className="mr-2">
										{product.comingSoon ? "Segera Hadir" : "Coba Sekarang"}
									</span>
									<ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
								</div>

								{/* Decorative Elements */}
								<div
									className="
										absolute -bottom-12 -right-12
										w-48 h-48
										bg-gradient-to-br from-[#E5D5F5]/30 to-transparent
										rounded-full
										transform group-hover:scale-150
										transition-transform duration-500
										blur-3xl
										opacity-50
									"
								/>

								{/* Coming Soon Badge */}
								{product.comingSoon && (
									<div className="absolute top-4 right-4 bg-[#1E1B4B] text-white text-xs px-3 py-1.5 rounded-full font-poppins shadow-lg shadow-[#E5D5F5]/20">
										Coming Soon
									</div>
								)}
							</Link>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
