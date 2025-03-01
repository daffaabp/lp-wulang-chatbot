"use client";

import { motion } from "framer-motion";

const missions = [
	{
		id: "mission-1",
		text: "Menyediakan akses ke teknologi AI canggih untuk mendukung penulisan akademik",
	},
	{
		id: "mission-2",
		text: "Memastikan integritas dan kualitas karya ilmiah tetap terjaga",
	},
	{
		id: "mission-3",
		text: "Meningkatkan efisiensi dan efektivitas proses penulisan akademik",
	},
	{
		id: "mission-4",
		text: "Memberikan dukungan 24/7 untuk komunitas akademik",
	},
	{
		id: "mission-5",
		text: "Mendorong inovasi dan kolaborasi",
	},
];

const About = () => {
	return (
		<section
			id="about"
			className="relative w-full py-16 md:py-24 overflow-hidden"
		>
			<div className="absolute inset-0 bg-gradient-to-br from-[#F8F7FF] via-[#F3EEFF] to-[#F5EEFF] opacity-60" />

			<div className="container relative mx-auto px-4 sm:px-6">
				{/* Header Section */}
				<div className="text-center max-w-4xl mx-auto mb-8 md:mb-10">
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						className="text-2xl md:text-3xl font-bold font-sulphur-point text-[#2D2B6B] mb-3"
					>
						Tentang Wulang AI
					</motion.h2>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.1 }}
						className="text-base md:text-lg text-[#2D2B6B]/80 leading-[1.6]"
					>
						Selamat datang di Wulang, platform inovatif berteknologi Artificial
						Intellegence yang dirancang oleh Kelas Inovatif untuk merevolusi
						cara mahasiswa, dosen, dan peneliti dalam menghasilkan karya ilmiah
						berkualitas. Wulang hadir sebagai solusi cerdas untuk mempermudah
						setiap langkahnya.
					</motion.p>
				</div>

				{/* Content Grid */}
				<div className="grid md:grid-cols-2 gap-8 md:gap-16 max-w-4xl mx-auto">
					{/* Vision Section */}
					<div>
						<div className="space-y-3">
							<div className="flex items-center gap-3 mb-2">
								<div className="w-6 h-6 bg-[#7C3AED] bg-opacity-90 rounded-full flex items-center justify-center">
									<svg
										className="w-3 h-3 text-white"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-labelledby="checkIconTitle"
									>
										<title id="checkIconTitle">Check Icon</title>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M5 13l4 4L19 7"
										/>
									</svg>
								</div>
								<h3 className="text-lg font-semibold font-sulphur-point text-[#2D2B6B]">
									Visi Kami
								</h3>
							</div>
							<p className="text-[#2D2B6B]/80 text-base leading-[1.7] pl-9">
								Menjadi platform AI terdepan yang memberikan solusi bagi
								mahasiswa, dosen, dan peneliti dalam menghasilkan karya ilmiah
								berkualitas tinggi, serta mendorong inovasi dan kolaborasi dalam
								dunia akademik.
							</p>

							{/* Feature Section */}
							<div className="pt-6 mt-6 border-t border-[#7C3AED]/10">
								<div className="flex items-center gap-3 mb-2">
									<div className="w-6 h-6 bg-[#7C3AED] bg-opacity-90 rounded-full flex items-center justify-center">
										<svg
											className="w-3 h-3 text-white"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
											aria-labelledby="lightningIconTitle"
										>
											<title id="lightningIconTitle">Lightning Icon</title>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M13 10V3L4 14h7v7l9-11h-7z"
											/>
										</svg>
									</div>
									<h3 className="text-lg font-semibold font-sulphur-point text-[#2D2B6B]">
										Teknologi AI Mutakhir
									</h3>
								</div>
								<p className="text-[#2D2B6B]/80 text-base leading-[1.7] pl-9">
									Ditenagai oleh model AI terdepan untuk memberikan hasil
									terbaik dalam penulisan akademik Anda.
								</p>
							</div>
						</div>
					</div>

					{/* Mission Section */}
					<div>
						<div className="space-y-3">
							<div className="flex items-center gap-3 mb-2">
								<div className="w-6 h-6 bg-[#7C3AED] bg-opacity-90 rounded-full flex items-center justify-center">
									<svg
										className="w-3 h-3 text-white"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-labelledby="missionCheckIconTitle"
									>
										<title id="missionCheckIconTitle">Mission Check Icon</title>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M5 13l4 4L19 7"
										/>
									</svg>
								</div>
								<h3 className="text-lg font-semibold font-sulphur-point text-[#2D2B6B]">
									Misi Kami
								</h3>
							</div>
							<ul className="space-y-3 pl-9">
								{missions.map((mission, index) => (
									<li key={mission.id} className="flex items-start gap-2.5">
										<div className="flex-shrink-0 w-5 h-5 bg-[#7C3AED] bg-opacity-80 rounded-full flex items-center justify-center text-white text-xs mt-0.5">
											{index + 1}
										</div>
										<p className="text-[#2D2B6B]/80 text-base leading-[1.7]">
											{mission.text}
										</p>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
