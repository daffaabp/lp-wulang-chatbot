import type { Metadata } from "next";
import { Poppins, Sulphur_Point } from "next/font/google";
import "./globals.css";

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
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${poppins.variable} ${sulphurPoint.variable} font-poppins antialiased min-h-screen bg-gradient-to-b from-[#F6F6F6] via-[#F6F6F6]/95 to-[#F6F6F6] relative`}
			>
				{/* Background Pattern */}
				<div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#F6F6F6,transparent)] pointer-events-none opacity-50" />

				{/* Content */}
				<div className="relative">{children}</div>
			</body>
		</html>
	);
}
