"use client";

import { motion } from "framer-motion";
import {
	CheckCircle2,
	Eye,
	MessageSquare,
	Mic,
	Monitor,
	Pen,
	Smartphone,
	Sparkles,
	X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const products = [
	{
		title: "Wulang Chatbot",
		description:
			"Platform percakapan AI interaktif untuk bantuan penulisan karya ilmiah dengan teknologi NLP canggih.",
		icon: <MessageSquare className="w-6 h-6" />,
		url: "https://chat.kelasinovatif.com/",
		iconBg: "bg-gradient-to-br from-blue-500 to-indigo-600",
		features: [
			"Brainstorming ide penelitian",
			"Review hasil penulisan dalam bentuk Word/Excel",
			"Upload gambar untuk analisis & review",
			"Panduan penulisan dari awal sampai akhir",
		],
		image: "/images/wulang-chat.PNG",
	},
	{
		title: "Wulang Asisten",
		description:
			"Wulang asisten berkolaborasi untuk membantu dari proposal, ide judul penelitian, gap riset, metode penelitian dan membuat kerangka tulisan.",
		icon: <Sparkles className="w-6 h-6" />,
		url: "https://tool.kelasinovatif.com/",
		iconBg: "bg-gradient-to-br from-purple-500 to-pink-600",
		features: [
			"Panduan penelitian step-by-step",
			"Eksplorasi ide dari umum ke khusus",
			"Pembentukan kerangka penelitian",
			"Analisis & saran perbaikan terstruktur",
		],
		image: "/images/wulang-asisten.png",
	},
	{
		title: "Wulang Voice",
		description:
			"Anda dapat berinteraksi secara alami dan efisien melalui suara yang menjadikan pencarian ide penulisan lebih dinamis dan menyenangkan",
		icon: <Mic className="w-6 h-6" />,
		url: "https://wulang.kelasinovatif.com/",
		iconBg: "bg-gradient-to-br from-orange-500 to-amber-600",
		features: [
			"Diskusi interaktif via suara",
			"Bimbingan penulisan dengan percakapan alami",
			"Konsultasi karya ilmiah secara lisan",
			"Tanya jawab seperti berbicara dengan profesor",
		],
		image: "/images/wulang-voice.PNG",
	},
	{
		title: "Wulang Chat WA",
		description:
			"Asisten penelitian 24/7 yang hadir di WhatsApp Anda, siap membantu brainstorming ide penelitian kapan saja, dimana saja, seperti memiliki customer service pribadi untuk karya ilmiah Anda.",
		icon: <Smartphone className="w-6 h-6" />,
		url: "https://wa.me/6285700312898?text=Hai,%20wulang%20",
		iconBg: "bg-gradient-to-br from-green-500 to-emerald-600",
		features: [
			"Integrasi WhatsApp",
			"Quick Response 24/7", 
			"Konsultasi Karya Ilmiah 24/7",
			"Ide & Inspirasi Penelitian",
		],
		image: "/images/wulang-chatwa.PNG",
	},
	{
		title: "Wulang Writer",
		description:
			"Aplikasi AI untuk pembuatan konten akademik dengan cepat dan efisien melalui instruksi sederhana. (Coming Soon)",
		icon: <Pen className="w-6 h-6" />,
		url: "/",
		iconBg: "bg-gradient-to-br from-emerald-500 to-teal-600",
		comingSoon: true,
		image: "/images/remove-bg/wulang2.png",
	},
	{
		title: "Wulang Office",
		description:
			"Aplikasi desktop Ms. Word yang terintegrasi dengan Wulang AI untuk pengalaman penulisan karya ilmiah yang lebih powerful. (Coming Soon)",
		icon: <Monitor className="w-6 h-6" />,
		url: "/",
		iconBg: "bg-gradient-to-br from-gray-600 to-slate-700",
		comingSoon: true,
		image: "/images/wulang-office.PNG",
	},
];

function PreviewModal({
	isOpen,
	onClose,
	image,
	title,
}: {
	isOpen: boolean;
	onClose: () => void;
	image: string;
	title: string;
}) {
	if (!isOpen) return null;

	const handleKeyDown = (e: React.KeyboardEvent) => {
		if (e.key === "Escape") {
			onClose();
		}
	};

	return (
		<dialog
			open
			className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 w-full h-full m-0 p-0 flex items-center justify-center"
			onClick={onClose}
			onKeyDown={handleKeyDown}
			aria-labelledby="modal-title"
		>
			<div
				className="relative bg-white rounded-2xl max-w-3xl w-[calc(100%-32px)] md:w-[calc(100%-48px)] lg:w-[calc(100%-64px)] shadow-2xl mx-4 md:mx-6 lg:mx-8 overflow-hidden"
				onClick={(e) => e.stopPropagation()}
				onKeyDown={(e) => e.stopPropagation()}
			>
				{/* Header with Gradient */}
				<div className="relative bg-gradient-to-r from-[#1E1B4B] to-[#2D2A6B] text-white">
					<div className="absolute inset-0 bg-[url('/images/pattern-light.svg')] opacity-10" />
					<div className="relative flex items-center justify-between p-3">
						<h3
							id="modal-title"
							className="text-lg md:text-xl font-bold text-center w-full"
						>
							{title}
						</h3>
						<button
							type="button"
							onClick={onClose}
							className="absolute right-2 p-1.5 hover:bg-white/10 rounded-full transition-colors"
							aria-label="Tutup preview"
						>
							<X className="w-4 h-4 text-white" />
						</button>
					</div>
				</div>

				{/* Image Preview with Gradient Overlay */}
				<div className="relative aspect-[16/9] bg-gradient-to-b from-gray-50 to-gray-100">
					<div className="absolute inset-0 bg-[url('/images/pattern-light.svg')] opacity-5" />
					<Image
						src={image}
						alt={`Preview ${title}`}
						fill
						className="object-contain p-4"
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
					/>
					{/* Gradient Overlays */}
					<div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent" />
					<div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent" />
				</div>
			</div>
		</dialog>
	);
}

export default function Products() {
	const [selectedProduct, setSelectedProduct] = useState<{
		image: string;
		title: string;
	} | null>(null);

	return (
		<>
			<section id="products" className="py-16 md:py-24 bg-[#F6F6F6]">
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
					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
						{products.map((product) => (
							<div
								key={product.title}
								className="bg-white rounded-2xl shadow-sm border border-[#E5D5F5]/20 overflow-hidden h-full"
							>
								<div className="p-6 md:p-8 flex flex-col h-full">
									{/* Icon & Title */}
									<div className="flex items-center gap-3 mb-4">
										<div
											className={`${product.iconBg} w-12 h-12 rounded-xl flex items-center justify-center text-white`}
										>
											{product.icon}
										</div>
										<h3 className="text-xl font-bold text-[#1E1B4B] font-sulphur-point">
											{product.title}
										</h3>
									</div>

									{/* Description */}
									<p className="text-[#4B5563] mb-6">{product.description}</p>

									{/* Features or Coming Soon */}
									<div className="flex-grow">
										{product.comingSoon ? (
											<div className="flex flex-col items-center justify-center py-4">
												<span className="inline-flex items-center px-6 py-2 rounded-xl bg-gray-100 text-lg font-semibold text-[#1E1B4B]">
													Coming Soon
												</span>
											</div>
										) : (
											<ul className="space-y-2">
												{product.features?.map((feature) => (
													<li
														key={feature}
														className="flex items-center gap-2 text-sm text-[#4B5563]"
													>
														<CheckCircle2 className="w-4 h-4 text-[#1E1B4B] flex-shrink-0" />
														<span>{feature}</span>
													</li>
												))}
											</ul>
										)}
									</div>

									{/* Actions */}
									<div className="flex items-center gap-3 mt-6 pt-6 border-t border-[#E5D5F5]/20">
										<Link
											href={product.url}
											className={`flex-1 px-4 py-2 rounded-xl text-center transition-colors ${
												product.comingSoon
													? "bg-gray-200 text-gray-600 cursor-not-allowed"
													: "bg-[#1E1B4B] text-white hover:bg-[#2D2A6B]"
											}`}
											onClick={(e) => product.comingSoon && e.preventDefault()}
										>
											{product.comingSoon ? "Coming Soon" : "Lihat Detail"}
										</Link>
										<button
											type="button"
											onClick={() =>
												setSelectedProduct({
													image: product.image,
													title: product.title,
												})
											}
											className="p-2 border border-[#E5D5F5] rounded-xl hover:bg-gray-50 transition-colors"
											title="Lihat Preview"
										>
											<Eye className="w-5 h-5 text-[#1E1B4B]" />
										</button>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Preview Modal */}
			<PreviewModal
				isOpen={!!selectedProduct}
				onClose={() => setSelectedProduct(null)}
				image={selectedProduct?.image || ""}
				title={selectedProduct?.title || ""}
			/>
		</>
	);
}
