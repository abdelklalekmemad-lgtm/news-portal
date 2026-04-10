import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { AppShell } from "@/components/layout/AppShell";
import { ArticleSidebar } from "@/components/layout/ArticleSidebar";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { ArticleBody } from "@/components/news/ArticleBody";
import { ArticleHeader } from "@/components/news/ArticleHeader";
import { OptimizedImage } from "@/components/ui/OptimizedImage";
import { RelatedArticles } from "@/components/news/RelatedArticles";
import { queryKeys } from "@/constants/queryKeys";
import { ROUTES } from "@/constants/routes";
import { fetchArticleBySlug, fetchArticles } from "@/services/articles";

export function ArticlePage() {
  const { slug = "" } = useParams();

  const { data: article, isPending } = useQuery({
    queryKey: queryKeys.articles.detail(slug),
    queryFn: () => fetchArticleBySlug(slug),
    enabled: Boolean(slug),
  });

  const { data: allArticles = [] } = useQuery({
    queryKey: queryKeys.articles.list(),
    queryFn: fetchArticles,
  });

  const related = useMemo(() => {
    if (!article) return [];
    return allArticles
      .filter(
        (a) =>
          a.id !== article.id && a.category.slug === article.category.slug
      )
      .slice(0, 4);
  }, [allArticles, article]);

  if (!slug) return null;

  if (isPending) {
    return (
      <AppShell sidebar={<ArticleSidebar />}>
        <div className="space-y-6">
          <div className="h-6 w-2/3 animate-pulse rounded bg-slate-200" />
          <div className="aspect-[21/9] animate-pulse rounded-2xl bg-slate-200" />
          <div className="h-40 animate-pulse rounded-xl bg-slate-200" />
        </div>
      </AppShell>
    );
  }

  if (!article) {
    return (
      <AppShell>
        <p className="text-center font-bold text-ink-muted">المقال غير موجود.</p>
      </AppShell>
    );
  }

  return (
    <AppShell sidebar={<ArticleSidebar />}>
      <article className="space-y-8">
        <Breadcrumbs
          items={[
            {
              label: article.category.name,
              to: ROUTES.category(article.category.slug),
            },
            { label: article.title },
          ]}
        />

        <ArticleHeader article={article} />

        <div className="overflow-hidden rounded-2xl border border-slate-100 bg-slate-100 shadow-card">
          <div className="aspect-[21/9] max-h-[420px] w-full">
            <OptimizedImage
              src={article.coverImageUrl}
              alt=""
              rounded="none"
              className="max-h-[420px]"
            />
          </div>
        </div>

        <ArticleBody article={article} />

        <RelatedArticles articles={related} />
      </article>
    </AppShell>
  );
}
