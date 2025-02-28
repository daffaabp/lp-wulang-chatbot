import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
	return (
		<div className="min-h-screen flex items-center justify-center">
			<div className="text-center">
				<h1 className="text-2xl font-bold text-[#1E1B4B] mb-4">
					Artikel tidak ditemukan
				</h1>
				<p className="text-[#4B5563] mb-6">
					Maaf, artikel yang Anda cari tidak tersedia.
				</p>
				<Link
					href="/#blog"
					className="inline-flex items-center text-[#1E1B4B] hover:underline"
				>
					<ArrowLeft className="w-4 h-4 mr-2" />
					Kembali ke Blog
				</Link>
			</div>
		</div>
	);
} 