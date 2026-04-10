export type ArticleId = string;

export interface Author {
  id: string;
  name: string;
  avatarUrl?: string;
}

export interface Category {
  id: string;
  slug: string;
  name: string;
}

export interface Article {
  id: ArticleId;
  slug: string;
  title: string;
  excerpt: string;
  coverImageUrl: string;
  publishedAt: string;
  category: Pick<Category, "id" | "slug" | "name">;
  author: Author;
  bodyHtml?: string;
  readMinutes?: number;
  featured?: boolean;
  trending?: boolean;
}
