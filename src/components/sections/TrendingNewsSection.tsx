import { NewsCardCompact } from "@/components/news/NewsCardCompact";
import { Card, CardContent } from "@/components/ui/Card";
import type { Article } from "@/types";

type TrendingNewsSectionProps = {
  articles: Article[];
};

export function TrendingNewsSection({ articles }: TrendingNewsSectionProps) {
  const list = articles.slice(0, 5);
  if (list.length === 0) return null;

  return (
    <section aria-labelledby="trending-heading">
      <Card>
        <CardContent>
          <h2 id="trending-heading" className="mb-4 text-lg font-extrabold text-ink">
            الأخبار الرائجة
          </h2>
          <ol className="space-y-3">
            {list.map((a, idx) => (
              <li key={a.id} className="flex gap-3">
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-muted text-sm font-extrabold text-brand-dark"
                  aria-hidden
                >
                  {idx + 1}
                </span>
                <div className="min-w-0 flex-1">
                  <NewsCardCompact article={a} />
                </div>
              </li>
            ))}
          </ol>
        </CardContent>
      </Card>
    </section>
  );
}
