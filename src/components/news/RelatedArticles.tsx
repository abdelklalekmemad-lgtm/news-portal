import { NewsCardCompact } from "@/components/news/NewsCardCompact";
import type { Article } from "@/types";

type RelatedArticlesProps = {
  articles: Article[];
  title?: string;
};

export function RelatedArticles({
  articles,
  title = "ذات صلة",
}: RelatedArticlesProps) {
  if (articles.length === 0) return null;

  return (
    <section className="space-y-4" aria-labelledby="related-heading">
      <h2 id="related-heading" className="text-xl font-extrabold text-ink">
        {title}
      </h2>
      <ul className="divide-y divide-slate-100 rounded-xl border border-slate-100 bg-white p-2 shadow-card">
        {articles.map((a) => (
          <li key={a.id} className="py-2 first:pt-1 last:pb-1">
            <NewsCardCompact article={a} />
          </li>
        ))}
      </ul>
    </section>
  );
}
