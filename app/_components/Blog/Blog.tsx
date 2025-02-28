"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
	ArrowRight,
	BookOpen,
	ChevronLeft,
	ChevronRight,
	Lightbulb,
	Sparkles,
} from "lucide-react";
import Link from "next/link";
import { useRef, useState } from "react";

// Data artikel dikelompokkan berdasarkan kategori
const categories = [
	{
		id: "product",
		title: "Artikel Produk Wulang",
		description:
			"Pelajari lebih dalam tentang fitur dan manfaat dari setiap produk Wulang",
		icon: <Sparkles className="w-5 h-5" />,
		gradient: "from-[#E5D5F5] via-[#ECE7F5] to-[#F3F0F5]",
		articles: [
			{
				title:
					"Revolusi Penulisan Ilmiah: Bagaimana AI Mengubah Cara Kita Berkarya",
				excerpt:
					"Teknologi AI mengubah lanskap penulisan karya ilmiah dengan efisiensi, akurasi, dan aksesibilitas yang ditawarkan.",
				slug: "revolusi-penulisan-ilmiah",
			},
			{
				title: "Panduan Lengkap Menggunakan Wulang",
				excerpt:
					"Tutorial mendalam tentang cara memaksimalkan penggunaan berbagai fitur Wulang untuk penulisan yang lebih baik.",
				slug: "panduan-lengkap-wulang",
			},
			{
				title: "Wulang Voice: Kolaborasi Interaktif dengan Asisten AI Suara",
				excerpt:
					"Kemudahan berinteraksi dengan asisten AI melalui suara untuk pengalaman penulisan yang lebih natural.",
				slug: "wulang-voice-interaktif",
			},
		],
	},
	{
		id: "tips",
		title: "Tips & Panduan Penulisan",
		description:
			"Tingkatkan keterampilan menulis Anda dengan tips dan panduan praktis",
		icon: <Lightbulb className="w-5 h-5" />,
		gradient: "from-[#F8E3D0] via-[#F5EBE0] to-[#F5F0E0]",
		articles: [
			{
				title: "Menggali Inspirasi: Teknik Kreatif untuk Ide Penulisan",
				excerpt:
					"Berbagai teknik kreatif untuk membangkitkan inspirasi dan menemukan ide-ide segar untuk tulisan Anda.",
				slug: "menggali-inspirasi",
			},
			{
				title: "Menulis dengan Gaya: Menemukan Suara Penulisan Unik",
				excerpt:
					"Panduan mengembangkan gaya penulisan yang khas dan menarik untuk membuat tulisan yang autentik.",
				slug: "menulis-dengan-gaya",
			},
			{
				title: "Mematahkan Kebuntuan Penulis",
				excerpt:
					"Strategi dan teknik untuk mengatasi writer's block dan kembali produktif dalam menulis.",
				slug: "mengatasi-writers-block",
			},
		],
	},
	{
		id: "academic",
		title: "Penulisan Akademik",
		description:
			"Panduan lengkap untuk menghasilkan karya ilmiah berkualitas tinggi",
		icon: <BookOpen className="w-5 h-5" />,
		gradient: "from-[#E5D5F5] via-[#F0E5F0] to-[#F8E3D0]",
		articles: [
			{
				title: "Menavigasi Labirin Sitasi: Panduan Gaya Kutipan Akademik",
				excerpt:
					"Panduan praktis tentang berbagai gaya kutipan akademik (APA, MLA, Chicago) untuk referensi yang akurat.",
				slug: "panduan-sitasi",
			},
			{
				title: "Dari Ide ke Tesis: Menyusun Proposal Penelitian",
				excerpt:
					"Langkah-langkah menyusun proposal penelitian yang efektif dan metodologi yang solid.",
				slug: "menyusun-proposal",
			},
			{
				title: "Menghindari Plagiarisme: Panduan Etika Akademik",
				excerpt:
					"Strategi menghindari plagiarisme dan menjaga integritas akademik dalam penulisan.",
				slug: "panduan-plagiarisme",
			},
		],
	},
];

export default function Blog() {
	const [activeTab, setActiveTab] = useState(categories[0].id);
	const carouselRef = useRef<HTMLDivElement>(null);

	const scrollCarousel = (direction: "left" | "right") => {
		if (!carouselRef.current) return;
		const scrollAmount = direction === "left" ? -320 : 320;
		carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
	};

	return (
		<section
			id="blog"
			className="py-12 md:py-24 overflow-hidden bg-gradient-to-b from-[#FFFFFF] via-[#F8F8F8] to-[#F6F6F6]"
		>
			<div className="container mx-auto px-4 md:px-6">
				{/* Section Header */}
				<div className="text-center max-w-3xl mx-auto mb-8 md:mb-16">
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						className="text-2xl md:text-4xl font-bold text-[#1E1B4B] mb-3 md:mb-4 font-sulphur-point"
					>
						Blog & Artikel
					</motion.h2>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.1 }}
						className="text-[#4B5563] text-base md:text-lg font-poppins px-4"
					>
						Temukan tips, panduan, dan wawasan mendalam tentang penulisan karya
						ilmiah
					</motion.p>
				</div>

				{/* Mobile Tab Navigation */}
				<div className="md:hidden mb-6">
					<div className="flex flex-col space-y-2">
						{categories.map((category) => (
							<button
								type="button"
								key={category.id}
								onClick={() => setActiveTab(category.id)}
								className={`
									flex items-center gap-3
									px-4 py-3
									rounded-xl
									transition-all duration-300
									${
										activeTab === category.id
											? "bg-[#1E1B4B] text-white shadow-lg transform scale-[1.02]"
											: "bg-white text-[#1E1B4B] hover:bg-gray-50"
									}
									border border-[#E5D5F5]/20
									font-medium
									relative
									overflow-hidden
								`}
							>
								<div
									className={`
										w-8 h-8
										rounded-lg
										flex items-center justify-center
										${activeTab === category.id ? "text-white" : "text-[#1E1B4B]"}
										transition-colors duration-300
									`}
								>
									{category.icon}
								</div>
								<span className="text-base flex-1 text-left">
									{category.title}
								</span>
								{activeTab === category.id && (
									<motion.div
										layoutId="activeIndicator"
										className="absolute inset-0 bg-[#1E1B4B] -z-10"
										transition={{ duration: 0.3 }}
									/>
								)}
							</button>
						))}
					</div>
				</div>

				{/* Desktop Tab Navigation */}
				<div className="hidden md:block max-w-5xl mx-auto mb-8">
					<div className="flex items-center justify-center gap-4">
						{categories.map((category) => (
							<button
								type="button"
								key={category.id}
								onClick={() => setActiveTab(category.id)}
								className={`
									flex items-center gap-2
									px-6 py-3
									rounded-full
									transition-all duration-300
									${
										activeTab === category.id
											? "bg-[#1E1B4B] text-white shadow-lg"
											: "bg-white text-[#1E1B4B] hover:bg-gray-50"
									}
									border border-[#E5D5F5]/20
									font-medium
								`}
							>
								<div
									className={`
										w-5 h-5
										rounded-full
										flex items-center justify-center
										${activeTab === category.id ? "text-white" : "text-[#1E1B4B]"}
									`}
								>
									{category.icon}
								</div>
								<span className="text-base">{category.title}</span>
							</button>
						))}
					</div>
				</div>

				{/* Content Area */}
				<div className="max-w-5xl mx-auto relative">
					<AnimatePresence mode="wait">
						{categories.map(
							(category) =>
								activeTab === category.id && (
									<motion.div
										key={category.id}
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
										exit={{ opacity: 0, y: -20 }}
										transition={{ duration: 0.3 }}
										className="space-y-6"
									>
										{/* Category Description */}
										<div className="text-center mb-6">
											<p className="text-[#4B5563] text-sm md:text-base lg:text-lg px-4">
												{category.description}
											</p>
										</div>

										{/* Mobile Articles Carousel */}
										<div className="relative md:hidden">
											<div
												ref={carouselRef}
												className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-4 px-4 gap-4 pb-4"
												style={{
													scrollSnapType: "x mandatory",
													WebkitOverflowScrolling: "touch",
												}}
											>
												{category.articles.map((article) => (
													<div
														key={article.slug}
														className="w-[85vw] flex-shrink-0 snap-center"
													>
														<Link
															href={`/blog/${article.slug}`}
															className={`
																block h-full
																p-5
																rounded-2xl
																border border-[#E5D5F5]/20
																bg-gradient-to-br ${category.gradient}
																shadow-sm hover:shadow-md
																transition-all duration-300
																group
															`}
														>
															<div className="flex flex-col h-full">
																<h4 className="text-xl font-bold text-[#1E1B4B] mb-3 font-sulphur-point line-clamp-2">
																	{article.title}
																</h4>
																<p className="text-[#4B5563] text-sm mb-4 line-clamp-3 flex-grow">
																	{article.excerpt}
																</p>
																<div className="pt-3 border-t border-[#E5D5F5]/20">
																	<div className="flex items-center text-[#1E1B4B] text-sm font-medium">
																		<span className="mr-2">
																			Baca Selengkapnya
																		</span>
																		<ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
																	</div>
																</div>
															</div>
														</Link>
													</div>
												))}
											</div>
											{/* Carousel Navigation */}
											<div className="flex justify-between items-center mt-4">
												<button
													type="button"
													onClick={() => scrollCarousel("left")}
													className="p-2 rounded-full bg-white shadow-md text-[#1E1B4B] hover:bg-gray-50 transition-colors"
													aria-label="Previous article"
												>
													<ChevronLeft className="w-5 h-5" />
												</button>
												<button
													type="button"
													onClick={() => scrollCarousel("right")}
													className="p-2 rounded-full bg-white shadow-md text-[#1E1B4B] hover:bg-gray-50 transition-colors"
													aria-label="Next article"
												>
													<ChevronRight className="w-5 h-5" />
												</button>
											</div>
										</div>

										{/* Desktop Articles Grid */}
										<div className="hidden md:grid md:grid-cols-3 gap-6">
											{category.articles.map((article) => (
												<Link
													key={article.slug}
													href={`/blog/${article.slug}`}
													className={`
														flex flex-col
														min-h-[220px]
														p-6
														rounded-2xl
														border border-[#E5D5F5]/20
														bg-gradient-to-br ${category.gradient}
														hover:shadow-lg hover:shadow-[#E5D5F5]/20
														hover:-translate-y-1
														transition-all duration-300
														group
													`}
												>
													<div className="flex-grow">
														<h4 className="text-lg font-bold text-[#1E1B4B] mb-3 font-sulphur-point line-clamp-2">
															{article.title}
														</h4>
														<p className="text-[#4B5563] text-sm mb-4 line-clamp-3">
															{article.excerpt}
														</p>
													</div>
													<div className="pt-3 border-t border-[#E5D5F5]/20">
														<div className="flex items-center text-[#1E1B4B] text-sm font-medium">
															<span className="mr-2">Baca Selengkapnya</span>
															<ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
														</div>
													</div>
												</Link>
											))}
										</div>

										{/* View All Link */}
										<div className="text-center mt-8">
											<Link
												href={`/blog/category/${category.id}`}
												className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-[#E5D5F5]/20 text-[#1E1B4B] font-medium hover:bg-gray-50 transition-colors shadow-sm"
											>
												<span>Lihat Semua Artikel {category.title}</span>
												<ArrowRight className="w-4 h-4" />
											</Link>
										</div>
									</motion.div>
								),
						)}
					</AnimatePresence>
				</div>
			</div>
		</section>
	);
}
