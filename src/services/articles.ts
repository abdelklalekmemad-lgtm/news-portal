import { mockArticles, mockCategories } from "@/data/mock-articles";
import type { Article, Category } from "@/types";

function delay<T>(value: T, ms = 220): Promise<T> {
  return new Promise((resolve) => setTimeout(() => resolve(value), ms));
}

export async function fetchArticles(): Promise<Article[]> {
  return delay([...mockArticles]);
}

export async function fetchArticleBySlug(slug: string): Promise<Article | null> {
  const found = mockArticles.find((a) => a.slug === slug) ?? null;
  return delay(found);
}

export async function fetchArticlesByCategorySlug(
  categorySlug: string
): Promise<Article[]> {
  const list = mockArticles.filter((a) => a.category.slug === categorySlug);
  return delay(list);
}

export async function fetchCategories(): Promise<Category[]> {
  return delay([...mockCategories]);
}

export function getFeaturedArticles(articles: Article[]): Article[] {
  return articles.filter((a) => a.featured);
}

export function getTrendingArticles(articles: Article[]): Article[] {
  return articles.filter((a) => a.trending);
}

export function getLatestArticles(articles: Article[], limit = 8): Article[] {
  return [...articles]
    .sort((a, b) => +new Date(b.publishedAt) - +new Date(a.publishedAt))
    .slice(0, limit);
}
