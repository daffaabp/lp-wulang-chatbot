import type { Metadata } from "next";
import { Poppins, Sulphur_Point } from "next/font/google";
import "./globals.css";
import Footer from "./_components/Footer/Footer";
import Header from "./_components/Header/Header";

const poppins = Poppins({
	weight: ["400", "500", "600", "700"],
	subsets: ["latin"],
	variable: "--font-poppins",
	display: "swap",
});

const sulphurPoint = Sulphur_Point({
	weight: ["400", "700"],
	subsets: ["latin"],
	variable: "--font-sulphur-point",
	display: "swap",
});

export const metadata: Metadata = {
	title: "Wulang AI - Virtual Assistant for Academic Writing",
	description:
		"Wulang AI helps students, lecturers and researchers write better academic papers with AI assistance",
	icons: {
		icon: [
			{
				url: "/images/wulang-favicon.svg",
				type: "image/svg+xml",
			},
		],
		shortcut: ["/images/wulang-favicon.svg"],
		apple: [
			{
				url: "/images/wulang-favicon.svg",
				type: "image/svg+xml",
			},
		],
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body
				className={`${poppins.variable} ${sulphurPoint.variable} font-poppins antialiased min-h-screen bg-gradient-to-b from-[#F6F6F6] via-[#F6F6F6]/95 to-[#F6F6F6] relative`}
			>
				{/* Background Pattern */}
				<div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#F6F6F6,transparent)] pointer-events-none opacity-50" />

				{/* Content */}
				<div className="relative">
					<Header />
					{children}
					<Footer />
				</div>

				{/* WhatsApp Floating Button */}
				<div className="fixed bottom-6 right-6 z-50 group">
					<a
						href="https://wa.me/6285712208535?text=Hai,%20saya%20ingin%20bertanya%20tentang%20Wulang%20AI"
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center justify-center w-12 h-12 bg-[#128C7E] text-white rounded-full shadow-lg hover:bg-[#075E54] transition-all duration-300"
						aria-label="Chat on WhatsApp"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							className="w-6 h-6"
						>
							<path
								fillRule="evenodd"
								d="M12 2C6.48 2 2 6.48 2 12c0 2.17.7 4.19 1.89 5.83L2.2 22l4.28-1.11c1.53.84 3.29 1.31 5.17 1.31 5.52 0 10-4.48 10-10S17.52 2 12 2zm0 19.2c-1.74 0-3.38-.47-4.78-1.28l-.34-.2-3.54.93.94-3.45-.22-.35c-.89-1.42-1.36-3.04-1.36-4.75 0-4.9 3.99-8.9 8.9-8.9s8.9 3.99 8.9 8.9-4 8.9-8.9 8.9zm5.08-6.52c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.69.88-.84 1.06-.16.18-.31.2-.58.07-.27-.14-1.13-.42-2.16-1.33-.8-.71-1.34-1.59-1.49-1.86-.16-.27-.02-.42.12-.55.12-.12.27-.31.4-.47.14-.16.18-.27.27-.45.09-.18.04-.33-.02-.47-.07-.14-.61-1.47-.84-2.01-.22-.52-.44-.45-.61-.46-.16-.01-.34-.01-.52-.01-.18 0-.47.07-.71.34-.24.27-.92.9-.92 2.19s.94 2.54 1.07 2.72c.13.18 1.84 2.81 4.45 3.94.62.27 1.11.43 1.49.55.63.2 1.2.17 1.65.1.5-.07 1.6-.65 1.82-1.29.22-.64.22-1.18.16-1.29-.07-.11-.25-.18-.52-.32z"
								clipRule="evenodd"
							/>
						</svg>
					</a>
					{/* Tooltip */}
					<div className="absolute bottom-full right-0 mb-2 pointer-events-none">
						<div className="bg-gray-900 text-white text-sm px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
							Hubungi Admin untuk informasi lebih lanjut
							<div className="absolute -bottom-1 right-4 w-2 h-2 bg-gray-900 transform rotate-45"></div>
						</div>
					</div>
				</div>
			</body>
		</html>
	);
}
