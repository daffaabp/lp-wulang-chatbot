import Card from "../components/Card";
import Section from "../components/Section";
import Header from "../home/_components/Header";

export default function ProductsPage() {
	const products = [
		{
			title: "Wulang AI Writer (Microsoft Word)",
			description:
				"Transformasi revolusioner dalam penulisan akademik! Plugin Microsoft Word yang cerdas ini menghadirkan kemampuan AI untuk menyempurnakan tulisan Anda secara real-time. Dengan fitur koreksi otomatis, saran referensi, dan pemformatan sesuai standar akademik, karya ilmiah Anda akan mencapai level profesional dengan lebih cepat dan efisien.",
			image: "/images/wulang-msword.PNG",
		},
		{
			title: "Wulang AI Chatbot (WhatsApp)",
			description:
				"Asisten pribadi 24/7 dalam genggaman Anda! Melalui WhatsApp, dapatkan bimbingan instan untuk brainstorming ide, review metodologi, hingga analisis data. Dengan respons cepat dan akurat, Wulang memastikan progress penelitian Anda tetap on-track kapanpun dibutuhkan.",
			image: "/images/wulang-whatsapp.PNG",
		},
		{
			title: "Wulang AI Voice (Browser)",
			description:
				"Rasakan pengalaman diskusi akademik yang lebih personal dan interaktif! Ajak Wulang berdiskusi melalui pesan suara dan dapatkan balasan dengan suara yang natural dan responsif. Sempurna untuk brainstorming sambil multitasking - rekam ide Anda saat berkendara atau berjalan, dan biarkan Wulang membantu mengembangkan konsep penelitian Anda melalui percakapan yang mengalir.",
			image: "/images/wulang-voice.PNG",
		},
	];

	return (
		<main className="min-h-screen bg-background">
			<Header />

			{/* Hero Section */}
			<Section className="bg-grid-slate-100">
				<div className="max-w-4xl mx-auto text-center">
					<h1 className="text-4xl md:text-5xl font-bold mb-6 font-sulphur">
						Produk Wulang AI
					</h1>
					<p className="text-lg text-gray-600 mb-8">
						Wulang AI adalah seorang virtual assistant kelas inovatif yang
						membantu mahasiswa, dosen, dan peneliti dalam penulisan karya
						ilmiah. Wulang memberikan saran dan panduan praktis yang dapat
						langsung diterapkan, dengan tetap menjaga kualitas dan integritas
						akademik.
					</p>
					<p className="text-lg text-gray-600">
						Wulang AI sekarang ada di setiap platform aplikasi penulisan seperti
						Microsoft Word, Browser, Android, dan Iphone.
					</p>
				</div>
			</Section>

			{/* Products Grid */}
			<Section className="bg-white">
				<div className="max-w-6xl mx-auto">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{products.map((product) => (
							<Card
								key={product.title}
								title={product.title}
								description={product.description}
								image={product.image}
							/>
						))}
					</div>
				</div>
			</Section>
		</main>
	);
}
