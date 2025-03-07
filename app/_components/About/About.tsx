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
				<div className="text-center max-w-4xl mx-auto">
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						className="text-2xl md:text-3xl font-bold font-sulphur-point text-[#2D2B6B] mb-6"
					>
						Tentang Wulang AI
					</motion.h2>

					<div className="space-y-6">
						<p className="text-base md:text-lg text-[#2D2B6B]/80 leading-[1.8]">
							Wulang AI adalah asisten virtual berbasis kecerdasan buatan yang
							dirancang khusus untuk membantu penulisan karya ilmiah. Dengan
							mengintegrasikan teknologi AI terkini seperti GPT-4 dan Deepseek,
							Wulang hadir sebagai partner yang memahami kompleksitas penulisan
							akademik dan berkomunikasi dengan bahasa yang natural dan
							kontekstual.
						</p>

						<p className="text-base md:text-lg text-[#2D2B6B]/80 leading-[1.8]">
							Wulang terlahir dari kebutuhan nyata komunitas Kelas Inovatif -
							sebuah wadah kolaborasi mahasiswa, dosen, dan peneliti dalam
							pengembangan karya ilmiah. Melalui pengalaman mendampingi ribuan
							akademisi, kami memahami tantangan dalam proses penulisan dan
							mengembangkan Wulang sebagai solusi yang membuat penulisan karya
							ilmiah menjadi lebih efisien dan menyenangkan.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
