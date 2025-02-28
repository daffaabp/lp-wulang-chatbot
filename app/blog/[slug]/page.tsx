import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { articles } from "../../_data";
import { notFound } from "next/navigation";
import { Metadata } from "next";

// Generate static params at build time
export async function generateStaticParams() {
	return Object.keys(articles).map((slug) => ({
		slug,
	}));
}

// Properly handle async params in metadata
export async function generateMetadata({
	params,
}: {
	params: Promise<{ slug: string }>;
}): Promise<Metadata> {
	const resolvedParams = await params;
	const article = articles[resolvedParams.slug];

	if (!article) {
		return {
			title: "Article Not Found - Wulang AI",
		};
	}

	return {
		title: `${article.title} - Wulang AI Blog`,
		description: article.excerpt,
	};
}

// Properly handle async params in page component
export default async function BlogArticle({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const resolvedParams = await params;
	const article = articles[resolvedParams.slug];

	if (!article) {
		notFound();
	}

	return (
		<article className="max-w-4xl mx-auto px-4 py-12 md:py-24">
			{/* Back Button */}
			<Link
				href="/#blog"
				className="inline-flex items-center text-[#1E1B4B] hover:underline mb-8"
			>
				<ArrowLeft className="w-4 h-4 mr-2" />
				Kembali ke Blog
			</Link>

			{/* Article Header */}
			<header className="mb-12">
				<h1 className="text-3xl md:text-4xl font-bold text-[#1E1B4B] mb-4 font-sulphur-point">
					{article.title}
				</h1>
				<div className="flex items-center gap-4 text-[#4B5563] text-sm">
					<span>{article.author}</span>
					<span>•</span>
					<time dateTime={article.publishDate}>
						{new Date(article.publishDate).toLocaleDateString("id-ID", {
							day: "numeric",
							month: "long",
							year: "numeric",
						})}
					</time>
				</div>
			</header>

			{/* Article Content */}
			<div
				className="prose prose-lg max-w-none prose-headings:font-sulphur-point prose-headings:text-[#1E1B4B] prose-p:text-[#4B5563] prose-a:text-[#1E1B4B] prose-a:no-underline hover:prose-a:underline"
				dangerouslySetInnerHTML={{ __html: article.content }}
			/>
		</article>
	);
}
