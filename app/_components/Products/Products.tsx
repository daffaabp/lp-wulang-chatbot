"use client";

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
		title: "Wulang Chat",
		description:
			"Platform percakapan AI interaktif untuk bantuan penulisan karya ilmiah dengan teknologi NLP canggih.",
		icon: <MessageSquare className="w-6 h-6" />,
		url: "https://chat.kelasinovatif.com",
		iconBg: "bg-gradient-to-br from-blue-500 to-indigo-600",
		price: "1.499K",
		features: [
			"Akses penuh ke AI Chat Assistant",
			"Unlimited chat sessions",
			"Template penulisan akademik",
			"Ekspor hasil chat ke Word/PDF",
		],
		image: "/images/wulang-chat.PNG",
	},
	{
		title: "Wulang Asisten",
		description:
			"Suite tools AI untuk membantu dari proposal hingga kerangka tulisan dengan pendekatan komprehensif.",
		icon: <Sparkles className="w-6 h-6" />,
		url: "https://asisten.kelasinovatif.com",
		iconBg: "bg-gradient-to-br from-purple-500 to-pink-600",
		price: "2.499K",
		features: [
			"AI Writing Assistant",
			"Analisis & saran perbaikan",
			"Rekomendasi jurnal",
			"Pemeriksaan plagiarisme",
		],
		image: "/images/wulang-chat.PNG",
	},
	{
		title: "Wulang Voice",
		description:
			"Interaksi suara intuitif untuk pengalaman penulisan yang lebih natural dan dinamis.",
		icon: <Mic className="w-6 h-6" />,
		url: "https://voice.kelasinovatif.com",
		iconBg: "bg-gradient-to-br from-orange-500 to-amber-600",
		price: "1.999K",
		features: [
			"Voice-to-text conversion",
			"Multi-bahasa support",
			"Transkripsi otomatis",
			"Edit hasil transkripsi",
		],
		image: "/images/wulang-voice.PNG",
	},
	{
		title: "Wulang Writer",
		description:
			"Aplikasi AI untuk pembuatan konten akademik dengan cepat dan efisien melalui instruksi sederhana.",
		icon: <Pen className="w-6 h-6" />,
		url: "https://writer.kelasinovatif.com",
		iconBg: "bg-gradient-to-br from-emerald-500 to-teal-600",
		price: "1.799K",
		features: [
			"AI Content Generation",
			"Grammar & Style Check",
			"Citation Manager",
			"Format Otomatis",
		],
		image: "/images/wulang-chat.PNG",
	},
	{
		title: "Wulang Chat WA",
		description:
			"Chatbot AI terintegrasi dengan WhatsApp untuk kolaborasi penulisan ilmiah yang lebih mudah dan familiar.",
		icon: <Smartphone className="w-6 h-6" />,
		url: "https://chatwa.kelasinovatif.com",
		iconBg: "bg-gradient-to-br from-green-500 to-emerald-600",
		price: "999K",
		features: [
			"Integrasi WhatsApp",
			"Quick Response 24/7",
			"Share & Collaborate",
			"Export ke Multiple Format",
		],
		image: "/images/wulang-chatwa.PNG",
	},
	{
		title: "Wulang Office",
		description:
			"Aplikasi desktop untuk pengalaman penulisan karya ilmiah yang lebih powerful. (Coming Soon)",
		icon: <Monitor className="w-6 h-6" />,
		url: "https://office.kelasinovatif.com",
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
			className="fixed inset-0 bg-black/50 z-50 w-full h-full m-0 p-0 flex items-center justify-center"
			onClick={onClose}
			onKeyDown={handleKeyDown}
			aria-labelledby="modal-title"
		>
			<div
				className="relative bg-white rounded-2xl max-w-3xl w-[calc(100%-32px)] md:w-[calc(100%-48px)] lg:w-[calc(100%-64px)] shadow-xl mx-4 md:mx-6 lg:mx-8"
				onClick={(e) => e.stopPropagation()}
				onKeyDown={(e) => e.stopPropagation()}
			>
				{/* Header */}
				<div className="relative flex items-center justify-between p-4 border-b">
					<div className="absolute inset-x-0 top-1/2 -translate-y-1/2">
						<h3
							id="modal-title"
							className="text-xl font-bold text-[#1E1B4B] text-center"
						>
							{title}
						</h3>
					</div>
					<div className="invisible">
						<span className="text-xl">{title}</span>
					</div>
					<button
						type="button"
						onClick={onClose}
						className="relative z-10 p-2 hover:bg-gray-100 rounded-full transition-colors"
						aria-label="Tutup preview"
					>
						<X className="w-5 h-5" />
					</button>
				</div>

				{/* Image Preview */}
				<div className="relative aspect-[16/9] bg-gray-100">
					<Image
						src={image}
						alt={`Preview ${title}`}
						fill
						className="object-contain"
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
					/>
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
						<h2 className="text-3xl md:text-4xl font-bold text-[#1E1B4B] mb-4 font-sulphur-point">
							Produk Wulang AI
						</h2>
						<p className="text-[#4B5563] text-lg font-poppins">
							Rangkaian solusi AI terpadu untuk membantu penulisan karya ilmiah
							Anda
						</p>
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

									{/* Price & Features or Coming Soon */}
									<div className="flex-grow">
										{product.comingSoon ? (
											<div className="flex flex-col items-center justify-center py-4">
												<span className="inline-flex items-center px-6 py-2 rounded-xl bg-gray-100 text-lg font-semibold text-[#1E1B4B]">
													Coming Soon
												</span>
											</div>
										) : (
											<>
												<div className="flex items-baseline gap-1 mb-4">
													<span className="text-2xl font-bold text-[#1E1B4B]">
														Rp {product.price}
													</span>
													<span className="text-sm text-[#4B5563]">/bulan</span>
												</div>
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
											</>
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
											{product.comingSoon
												? "Coming Soon"
												: "Mulai Berlangganan"}
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
