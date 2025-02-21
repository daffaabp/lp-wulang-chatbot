import Section from "../components/Section";
import Header from "../home/_components/Header";

export default function FAQPage() {
	const faqs = [
		{
			question: "Apa itu Wulang AI?",
			answer:
				"Wulang AI adalah asisten virtual cerdas yang membantu mahasiswa, dosen, dan peneliti menghasilkan karya ilmiah berkualitas dengan teknologi AI mutakhir.",
		},
		{
			question:
				"Bagaimana Wulang AI bisa membantu penulisan karya ilmiah saya?",
			answer:
				"Wulang AI menyediakan panduan real-time, koreksi otomatis, saran referensi, dan pemformatan standar akademik untuk mempercepat proses penulisan Anda.",
		},
		{
			question: "Di platform apa saja Wulang AI tersedia?",
			answer:
				"Wulang AI tersedia di Microsoft Word sebagai plugin, WhatsApp sebagai chatbot, dan browser sebagai asisten suara.",
		},
		{
			question: "Berapa biaya untuk menggunakan Wulang AI?",
			answer:
				"Tersedia 3 paket: Wulang AI Writer (Rp 4,9 juta), Wulang AI Chatbot (Rp 3,9 juta), dan Wulang AI Voice (Rp 1,9 juta).",
		},
		{
			question: "Apa keunggulan utama Wulang AI?",
			answer:
				"Wulang AI menggunakan teknologi AI terkini seperti GPT-4 dengan respons cepat dan akurat untuk menghasilkan tulisan berkualitas.",
		},
		{
			question: "Apakah Wulang AI menjaga integritas akademik?",
			answer:
				"Ya! Wulang AI dirancang khusus untuk memastikan kualitas dan integritas karya ilmiah tetap terjaga sesuai standar akademik.",
		},
		{
			question: "Bagaimana cara mendapatkan dukungan dari Wulang AI?",
			answer:
				"Wulang AI memberikan dukungan 24/7 melalui berbagai platform dengan panduan langkah demi langkah dan saran yang konstruktif.",
		},
	];

	return (
		<main className="min-h-screen bg-background">
			<Header />

			{/* Hero Section */}
			<Section className="bg-grid-slate-100">
				<div className="max-w-4xl mx-auto text-center">
					<h1 className="text-4xl md:text-5xl font-bold mb-6 font-sulphur">
						FAQ Wulang AI
					</h1>
					<p className="text-lg text-gray-600">
						Temukan jawaban untuk pertanyaan yang sering diajukan tentang Wulang
						AI
					</p>
				</div>
			</Section>

			{/* FAQ Accordion */}
			<Section className="bg-white">
				<div className="max-w-4xl mx-auto">
					<div className="space-y-4">
						{faqs.map((faq) => (
							<details
								key={faq.question}
								className="group bg-white rounded-lg border shadow-sm"
							>
								<summary className="flex justify-between items-center cursor-pointer p-6">
									<h3 className="text-lg font-medium">{faq.question}</h3>
									<span className="ml-6 flex-shrink-0">
										<svg
											className="w-6 h-6 transform group-open:rotate-180 transition-transform duration-200"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
											role="img"
											aria-label="Toggle answer"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M19 9l-7 7-7-7"
											/>
										</svg>
									</span>
								</summary>
								<div className="px-6 pb-6 text-gray-600">{faq.answer}</div>
							</details>
						))}
					</div>
				</div>
			</Section>
		</main>
	);
}
