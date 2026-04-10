import { Link } from "react-router-dom";
import { NewsCard } from "@/components/news/NewsCard";
import { ROUTES } from "@/constants/routes";
import type { Article, Category } from "@/types";

type CategoryPreviewSectionProps = {
  category: Category;
  articles: Article[];
  limit?: number;
};

export function CategoryPreviewSection({
  category,
  articles,
  limit = 3,
}: CategoryPreviewSectionProps) {
  const list = articles.slice(0, limit);
  if (list.length === 0) return null;

  return (
    <section
      className="space-y-4"
      aria-labelledby={`cat-${category.slug}-heading`}
    >
      <div className="flex items-end justify-between gap-4">
        <h2
          id={`cat-${category.slug}-heading`}
          className="text-2xl font-extrabold text-ink"
        >
          {category.name}
        </h2>
        <Link
          to={ROUTES.category(category.slug)}
          className="text-sm font-bold text-brand hover:underline"
        >
          عرض الكل
        </Link>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((a) => (
          <NewsCard key={a.id} article={a} />
        ))}
      </div>
    </section>
  );
}
