"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, BookOpen, Lightbulb, Sparkles } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

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

	return (
		<section id="blog" className="py-16 md:py-24 overflow-hidden bg-gradient-to-b from-[#FFFFFF] via-[#F8F8F8] to-[#F6F6F6]">
			<div className="container mx-auto px-4 md:px-6">
				{/* Section Header */}
				<div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						className="text-3xl md:text-4xl font-bold text-[#1E1B4B] mb-4 font-sulphur-point"
					>
						Blog & Artikel
					</motion.h2>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.1 }}
						className="text-[#4B5563] text-lg font-poppins"
					>
						Temukan tips, panduan, dan wawasan mendalam tentang penulisan karya
						ilmiah
					</motion.p>
				</div>

				{/* Tab Navigation */}
				<div className="max-w-5xl mx-auto mb-8">
					<div className="flex flex-nowrap md:flex-wrap items-center justify-start md:justify-center gap-4 overflow-x-auto md:overflow-x-visible py-2 px-4 md:px-0">
						{categories.map((category) => (
							<button
								type="button"
								key={category.id}
								onClick={() => setActiveTab(category.id)}
								className={`
									flex items-center gap-2
									px-4 py-2
									rounded-full
									whitespace-nowrap
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
										${
											activeTab === category.id
												? "text-white"
												: "text-[#1E1B4B]"
										}
									`}
								>
									{category.icon}
								</div>
								<span className="text-sm md:text-base">{category.title}</span>
							</button>
						))}
					</div>
				</div>

				{/* Content Area */}
				<div className="max-w-5xl mx-auto">
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
									>
										{/* Category Description */}
										<div className="text-center mb-8">
											<p className="text-[#4B5563] text-base md:text-lg">
												{category.description}
											</p>
										</div>

										{/* Articles Grid */}
										<div className="grid md:grid-cols-3 gap-6">
											{category.articles.map((article) => (
												<Link
													key={article.slug}
													href={`/blog/${article.slug}`}
													className={`
														flex flex-col
														min-h-[200px]
														p-6 
														rounded-2xl
														border border-[#E5D5F5]/20
														bg-gradient-to-br ${category.gradient}
														hover:shadow-lg hover:shadow-[#E5D5F5]/20
														hover:-translate-y-1
														transition-all duration-300
														group
														relative
													`}
												>
													<div className="flex-grow">
														<h4 className="text-lg font-bold text-[#1E1B4B] mb-2 font-sulphur-point line-clamp-2">
															{article.title}
														</h4>
														<p className="text-[#4B5563] text-sm mb-2 line-clamp-3">
															{article.excerpt}
														</p>
													</div>
													<div className="mt-2 pt-2 border-t border-[#E5D5F5]/20">
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
												className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white border border-[#E5D5F5]/20 text-[#1E1B4B] font-medium hover:bg-gray-50 transition-colors shadow-sm"
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
