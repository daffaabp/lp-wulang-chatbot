export interface Article {
	slug: string;
	title: string;
	publishDate: string;
	author: string;
	content: string;
	excerpt: string;
	category: "product" | "tips" | "academic";
}

export type ArticleRecord = Record<string, Article>; 