"use client";

import { motion } from "framer-motion";
import {
	ChevronDown,
	Clock,
	Globe,
	Shield,
	Sparkles,
	Users,
} from "lucide-react";
import { useState } from "react";

const faqs = [
	{
		id: "satisfaction-guarantee",
		question: "Bagaimana cara berlangganan wulang?",
		answer:
			"Saat ini Wulang sedang dalam masa promo dan bisa diakses GRATIS! Pilih produk yang Anda inginkan dan mulai gunakan. Namun nantinya akan tersedia berbagai pilihan paket membership yang bisa disesuaikan dengan kebutuhan Anda.",
		icon: <Shield className="w-5 h-5" />,
	},
	{
		id: "mastery-time",
		question: "Bagaimana cara menggunakan Wulang?",
		answer:
			"Sangat mudah! Pilih platform yang Anda inginkan (Chat, Asisten, Voice, atau lainnya), dan langsung mulai interaksi. Dalam waktu singkat Anda sudah bisa menulis karya ilmiah dengan bantuan AI!",
		icon: <Clock className="w-5 h-5" />,
	},
	{
		id: "journal-recommendation",
		question: "Apakah Wulang ChatBot menyimpan history?",
		answer:
			"Yap! Semua percakapan tersimpan dengan aman di dalam aplikasi Wulang ChatBot dan dapat Anda akses kembali kapan saja untuk melanjutkan diskusi sebelumnya.",
		icon: <Globe className="w-5 h-5" />,
	},
	{
		id: "product-selection",
		question: "Bagaimana cara memilih produk Wulang yang sesuai kebutuhan Anda?",
		answer:
			"Pilih Wulang Chatbot untuk penulisan komprehensif, Wulang Asisten untuk panduan terstruktur, Wulang Voice untuk diskusi dinamis, atau Wulang Chat WA untuk konsultasi instan via WhatsApp. Setiap produk dirancang untuk pengalaman yang berbeda sesuai gaya kerja Anda.",
		icon: <Users className="w-5 h-5" />,
	},
	{
		id: "unique-features",
		question: "Apa yang membuat Wulang berbeda dari AI lainnya?",
		answer:
			"Wulang dilatih khusus untuk dunia akademik dan berkomunikasi dengan bahasa yang manusiawi. Seperti asisten pribadi yang memahami kebutuhan spesifik dalam penulisan skripsi, tesis, dan karya ilmiah Anda.",
		icon: <Sparkles className="w-5 h-5" />,
	},
];

export default function FAQ() {
	const [openIndex, setOpenIndex] = useState<number | null>(null);

	return (
		<section
			id="faq"
			className="py-16 md:py-24 overflow-hidden bg-gradient-to-b from-[#F6F6F6] via-[#F8F8F8] to-[#FFFFFF]"
		>
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
