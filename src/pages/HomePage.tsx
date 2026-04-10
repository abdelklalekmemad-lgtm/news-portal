import { useQuery } from "@tanstack/react-query";
import { AppShell } from "@/components/layout/AppShell";
import { ArticleSidebar } from "@/components/layout/ArticleSidebar";
import { FeaturedNewsSection } from "@/components/sections/FeaturedNewsSection";
import { TrendingNewsSection } from "@/components/sections/TrendingNewsSection";
import { LatestNewsSection } from "@/components/sections/LatestNewsSection";
import { CategoryPreviewSection } from "@/components/sections/CategoryPreviewSection";
import { queryKeys } from "@/constants/queryKeys";
import {
  fetchArticles,
  fetchCategories,
  getFeaturedArticles,
  getLatestArticles,
  getTrendingArticles,
} from "@/services/articles";

export function HomePage() {
  const { data: articles = [], isPending } = useQuery({
    queryKey: queryKeys.articles.list(),
    queryFn: fetchArticles,
  });

  const { data: categories = [] } = useQuery({
    queryKey: queryKeys.categories.all,
    queryFn: fetchCategories,
  });

  const featured = getFeaturedArticles(articles);
  const trending = getTrendingArticles(articles);
  const latest = getLatestArticles(articles, 9);

  return (
    <AppShell sidebar={<ArticleSidebar />}>
      <div className="space-y-12">
        {isPending ? (
          <div className="h-40 animate-pulse rounded-2xl bg-slate-200/80" />
        ) : (
          <>
            <FeaturedNewsSection articles={featured} />
            <TrendingNewsSection articles={trending} />
            <LatestNewsSection articles={latest} />
            {categories.map((cat) => (
              <CategoryPreviewSection
                key={cat.id}
                category={cat}
                articles={articles.filter((a) => a.category.slug === cat.slug)}
              />
            ))}
          </>
        )}
      </div>
    </AppShell>
  );
}
