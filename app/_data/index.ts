import { ArticleRecord } from './interfaces';
import { productArticles } from './articles-product';
import { tipsArticles } from './articles-tips';
import { academicArticles } from './articles-academic';

export const articles: ArticleRecord = {
    ...productArticles,
    ...tipsArticles,
    ...academicArticles,
}; 