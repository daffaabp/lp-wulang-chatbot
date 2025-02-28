"use client";

import { motion } from "framer-motion";
import { ChevronDown, Clock, Globe, Lock, Shield, Users } from "lucide-react";
import { useState } from "react";

const faqs = [
	{
		id: "mastery-time",
		question: "Berapa lama waktu yang dibutuhkan untuk menguasai Wulang AI?",
		answer:
			"Wulang AI dirancang dengan antarmuka yang sangat intuitif. Pengguna biasanya dapat mulai menggunakan fitur dasar dalam 5-10 menit, dan menguasai fitur lanjutan dalam 1-2 hari pemakaian.",
		icon: <Clock className="w-5 h-5" />,
	},
	{
		id: "journal-recommendation",
		question:
			"Apakah Wulang AI bisa membantu saya menemukan jurnal yang sesuai untuk publikasi?",
		answer:
			"Ya! Wulang AI memiliki database jurnal terupdate dan dapat merekomendasikan jurnal yang paling sesuai berdasarkan topik, scope, dan impact factor yang diinginkan.",
		icon: <Globe className="w-5 h-5" />,
	},
	{
		id: "technical-support",
		question:
			"Bagaimana jika saya mengalami kendala teknis saat menggunakan Wulang AI?",
		answer:
			"Tim support kami siap membantu 24/7 melalui live chat, email, atau WhatsApp. Rata-rata waktu respons kami kurang dari 15 menit untuk setiap pertanyaan teknis.",
		icon: <Users className="w-5 h-5" />,
	},
	{
		id: "satisfaction-guarantee",
		question: "Apakah ada garansi kepuasan untuk layanan Wulang AI?",
		answer:
			"Ya! Kami menyediakan garansi uang kembali 30 hari jika Anda merasa layanan kami tidak sesuai dengan ekspektasi Anda.",
		icon: <Shield className="w-5 h-5" />,
	},
	{
		id: "data-security",
		question: "Bagaimana keamanan data penelitian saya di Wulang AI?",
		answer:
			"Kami menggunakan enkripsi end-to-end dan mematuhi standar keamanan data internasional. Data Anda 100% aman dan confidential.",
		icon: <Lock className="w-5 h-5" />,
	},
];

export default function FAQ() {
	const [openIndex, setOpenIndex] = useState<number | null>(null);

	return (
		<section id="faq" className="py-16 md:py-24 overflow-hidden bg-gradient-to-b from-[#F6F6F6] via-[#F8F8F8] to-[#FFFFFF]">
			<div className="container mx-auto px-4 md:px-6">
				{/* Section Header */}
				<div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						className="text-3xl md:text-4xl font-bold text-[#1E1B4B] mb-4 font-sulphur-point"
					>
						FAQ
					</motion.h2>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.1 }}
						className="text-[#4B5563] text-lg font-poppins"
					>
						Temukan jawaban untuk pertanyaan umum tentang Wulang AI
					</motion.p>
				</div>

				{/* FAQ List */}
				<div className="max-w-3xl mx-auto space-y-4">
					{faqs.map((faq, index) => (
						<div
							key={faq.id}
							className="border border-[#E5D5F5]/20 rounded-xl overflow-hidden"
						>
							<button
								type="button"
								onClick={() => setOpenIndex(openIndex === index ? null : index)}
								className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-gray-50 transition-colors"
							>
								<div className="flex items-center gap-3">
									<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#E5D5F5] to-[#F8E3D0] flex items-center justify-center text-[#1E1B4B]">
										{faq.icon}
									</div>
									<span className="text-[#1E1B4B] font-sm font-poppins">
										{faq.question}
									</span>
								</div>
								<ChevronDown
									className={`w-5 h-5 text-[#1E1B4B] transition-transform ${
										openIndex === index ? "transform rotate-180" : ""
									}`}
								/>
							</button>
							<div
								className={`
									overflow-hidden transition-all duration-300 ease-in-out
									${openIndex === index ? "max-h-48" : "max-h-0"}
								`}
							>
								<div className="p-6 pt-0 text-[#4B5563] font-poppins">
									{faq.answer}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
