import Section from "../components/Section";
import Header from "../home/_components/Header";

export default function AboutPage() {
	const advantages = [
		{
			title: "Teknologi AI Mutakhir",
			description:
				"Ditenagai oleh model AI terdepan seperti GPT-4, Deepseek, Qwen, dan lainnya dengan kemampuan pemahaman konteks yang mendalam dan respons cepat dan akurat",
		},
		{
			title: "Fokus pada Kualitas Akademik",
			description:
				"Pemahaman mendalam tentang standar penulisan ilmiah, menjaga integritas akademik, dan saran referensi yang relevan dan terpercaya",
		},
		{
			title: "Aksesibilitas Maksimal",
			description:
				"Tersedia di berbagai platform (Microsoft Word, WhatsApp, Browser) dengan antarmuka yang intuitif dan mudah digunakan serta dukungan semua bahasa",
		},
		{
			title: "Dukungan Komprehensif",
			description:
				"Panduan langkah demi langkah, saran perbaikan yang konstruktif, dan referensi serta metodologi yang tervalidasi",
		},
	];

	return (
		<main className="min-h-screen bg-background">
			<Header />

			{/* Hero Section */}
			<Section className="bg-grid-slate-100">
				<div className="max-w-4xl mx-auto text-center">
					<h1 className="text-4xl md:text-5xl font-bold mb-6 font-sulphur">
						Tentang Wulang AI
					</h1>
					<p className="text-lg text-gray-600 mb-8">
						Wulang AI adalah asisten virtual cerdas yang dikembangkan oleh Kelas
						Inovatif untuk membantu mahasiswa, dosen, dan peneliti dalam
						menghasilkan karya ilmiah berkualitas. Dengan menggabungkan
						teknologi AI terkini dan pemahaman mendalam tentang kebutuhan
						akademik, Wulang AI hadir sebagai partner setia dalam perjalanan
						penulisan ilmiah Anda.
					</p>
				</div>
			</Section>

			{/* Vision & Mission */}
			<Section className="bg-white">
				<div className="max-w-4xl mx-auto">
					<div className="mb-12">
						<h2 className="text-3xl font-bold mb-4 font-sulphur">Visi Kami</h2>
						<p className="text-lg text-gray-600">
							Menjadi pemimpin dalam inovasi teknologi pendidikan dengan
							menciptakan solusi AI yang membantu meningkatkan kualitas
							penelitian dan penulisan akademik di Indonesia.
						</p>
					</div>
					<div>
						<h2 className="text-3xl font-bold mb-4 font-sulphur">Misi Kami</h2>
						<ul className="space-y-3 text-lg text-gray-600">
							<li className="flex items-center">
								<span className="mr-2">•</span>
								<span>
									Menyediakan akses ke teknologi AI canggih untuk mendukung
									penulisan akademik
								</span>
							</li>
							<li className="flex items-center">
								<span className="mr-2">•</span>
								<span>
									Memastikan integritas dan kualitas karya ilmiah tetap terjaga
								</span>
							</li>
							<li className="flex items-center">
								<span className="mr-2">•</span>
								<span>
									Meningkatkan efisiensi dan efektivitas proses penulisan
									akademik
								</span>
							</li>
							<li className="flex items-center">
								<span className="mr-2">•</span>
								<span>Memberikan dukungan 24/7 untuk komunitas akademik</span>
							</li>
						</ul>
					</div>
				</div>
			</Section>

			{/* Advantages */}
			<Section className="bg-grid-slate-100">
				<div className="max-w-6xl mx-auto">
					<h2 className="text-3xl font-bold mb-12 text-center font-sulphur">
						Keunggulan Wulang AI
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						{advantages.map((advantage, index) => (
							<div
								key={advantage.title}
								className="bg-white p-8 rounded-lg shadow-md"
							>
								<h3 className="text-xl font-bold mb-4">{advantage.title}</h3>
								<p className="text-gray-600">{advantage.description}</p>
							</div>
						))}
					</div>
				</div>
			</Section>

			{/* Closing */}
			<Section className="bg-white">
				<div className="max-w-4xl mx-auto text-center">
					<p className="text-lg text-gray-600">
						Wulang AI adalah hasil kolaborasi antara para ahli teknologi dan
						akademisi di Kelas Inovatif, yang berkomitmen untuk terus berinovasi
						dalam menghadirkan solusi terbaik bagi komunitas akademik Indonesia.
					</p>
				</div>
			</Section>
		</main>
	);
}
