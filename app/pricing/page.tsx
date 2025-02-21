import Card from "../components/Card";
import Section from "../components/Section";
import Header from "../home/_components/Header";

export default function PricingPage() {
	const packages = [
		{
			title: "Wulang AI Writer (Microsoft Word)",
			description:
				"Plugin Microsoft Word dengan AI untuk penyempurnaan tulisan real-time",
			price: "Rp 4,9 Juta",
			features: [
				"Plugin Microsoft Word dengan AI untuk penyempurnaan tulisan real-time",
				"Koreksi otomatis dan saran referensi",
				"Pemformatan standar akademik",
				"Peningkatan efisiensi penulisan karya ilmiah",
			],
		},
		{
			title: "Wulang AI Chatbot (WhatsApp)",
			description: "Asisten pribadi 24/7 via WhatsApp",
			price: "Rp 3,9 Juta",
			features: [
				"Asisten pribadi 24/7 via WhatsApp",
				"Bimbingan instan untuk brainstorming",
				"Review metodologi dan analisis data",
				"Respons cepat dan akurat",
			],
		},
		{
			title: "Wulang AI Voice (Browser)",
			description: "Interaksi suara natural dan responsif",
			price: "Rp 1,9 Juta",
			features: [
				"Interaksi suara natural dan responsif",
				"Diskusi akademik melalui pesan suara",
				"Ideal untuk brainstorming sambil multitasking",
				"Pengembangan konsep penelitian melalui percakapan",
			],
		},
	];

	return (
		<main className="min-h-screen bg-background">
			<Header />

			{/* Hero Section */}
			<Section className="bg-grid-slate-100">
				<div className="max-w-4xl mx-auto text-center">
					<h1 className="text-4xl md:text-5xl font-bold mb-6 font-sulphur">
						Pilihan Paket Wulang AI
					</h1>
					<p className="text-lg text-gray-600 mb-8">
						Wulang AI adalah seorang virtual assistant kelas inovatif yang
						membantu mahasiswa, dosen, dan peneliti dalam penulisan karya
						ilmiah. Wulang memberikan saran dan panduan praktis yang dapat
						langsung diterapkan, dengan tetap menjaga kualitas dan integritas
						akademik.
					</p>
				</div>
			</Section>

			{/* Pricing Grid */}
			<Section className="bg-white">
				<div className="max-w-6xl mx-auto">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{packages.map((pkg) => (
							<Card
								key={pkg.title}
								title={pkg.title}
								description={pkg.description}
								price={pkg.price}
								features={pkg.features}
							/>
						))}
					</div>
				</div>
			</Section>
		</main>
	);
}
