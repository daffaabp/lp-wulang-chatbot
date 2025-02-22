import type { Metadata } from "next";
import About from "./_components/About/About";
import Header from "./_components/Header/Header";
import Hero from "./_components/Hero/Hero";
import Title from "./_components/Hero/Title";
import Trusted from "./_components/Trusted/Trusted";

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
			<About />
			<Trusted />
		</main>
	);
}
