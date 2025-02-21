import type { Metadata } from "next";
import Header from "./home/_components/Header";
import Hero from "./home/_components/Hero";
import Title from "./home/_components/Title";
import Trusted from "./home/_components/Trusted";

export const metadata: Metadata = {
	title: "Wulang AI - Virtual Assistant for Academic Writing",
	description:
		"Wulang AI helps students, lecturers and researchers write better academic papers with AI assistance",
};

export default function HomePage() {
	return (
		<main className="min-h-screen">
			<Header />
			<div className="w-full max-w-7xl mx-auto px-4 pt-4 sm:px-6 lg:px-8">
				<Title />
				<Hero />
			</div>
			<Trusted />
		</main>
	);
}
