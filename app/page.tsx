import type { Metadata } from "next";
import About from "./_components/About/About";
import Blog from "./_components/Blog/Blog";
import FAQ from "./_components/FAQ/FAQ";
import Hero from "./_components/Hero/Hero";
import Title from "./_components/Hero/Title";
import Products from "./_components/Products/Products";
// import Trusted from "./_components/Trusted/Trusted";

export const metadata: Metadata = {
	title: "Wulang AI - Virtual Assistant for Academic Writing",
	description:
		"Wulang AI helps students, lecturers and researchers write better academic papers with AI assistance",
};

export default function HomePage() {
	return (
		<>
			<div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<Title />
				<Hero />
			</div>
			<About />
			<Products />
			<Blog />
			<FAQ />
		</>
	);
}
