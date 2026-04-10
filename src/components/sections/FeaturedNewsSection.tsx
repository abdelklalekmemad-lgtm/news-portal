import { NewsCardFeatured } from "@/components/news/NewsCardFeatured";
import type { Article } from "@/types";

type FeaturedNewsSectionProps = {
  articles: Article[];
};

export function FeaturedNewsSection({ articles }: FeaturedNewsSectionProps) {
  const primary = articles[0];
  if (!primary) return null;

  return (
    <section className="space-y-4" aria-labelledby="featured-heading">
      <div className="flex items-end justify-between gap-4">
        <h2 id="featured-heading" className="text-2xl font-extrabold text-ink">
          أخبار مميزة
        </h2>
      </div>
      <NewsCardFeatured article={primary} />
    </section>
  );
}
