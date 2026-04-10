import { NewsCard } from "@/components/news/NewsCard";
import type { Article } from "@/types";

type LatestNewsSectionProps = {
  articles: Article[];
};

export function LatestNewsSection({ articles }: LatestNewsSectionProps) {
  if (articles.length === 0) return null;

  return (
    <section className="space-y-4" aria-labelledby="latest-heading">
      <h2 id="latest-heading" className="text-2xl font-extrabold text-ink">
        أحدث الأخبار
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((a) => (
          <NewsCard key={a.id} article={a} />
        ))}
      </div>
    </section>
  );
}
