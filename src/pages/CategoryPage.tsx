import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { AppShell } from "@/components/layout/AppShell";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { NewsCard } from "@/components/news/NewsCard";
import { Pagination } from "@/components/common/Pagination";
import { queryKeys } from "@/constants/queryKeys";
import { fetchArticlesByCategorySlug, fetchCategories } from "@/services/articles";

const PAGE_SIZE = 6;

export function CategoryPage() {
  const { slug = "" } = useParams();
  const [page, setPage] = useState(1);

  useEffect(() => {
    setPage(1);
  }, [slug]);

  const { data: categories = [] } = useQuery({
    queryKey: queryKeys.categories.all,
    queryFn: fetchCategories,
  });

  const category = useMemo(
    () => categories.find((c) => c.slug === slug),
    [categories, slug]
  );

  const { data: articles = [], isPending } = useQuery({
    queryKey: queryKeys.articles.list({ category: slug }),
    queryFn: () => fetchArticlesByCategorySlug(slug),
    enabled: Boolean(slug),
  });

  const totalPages = Math.max(1, Math.ceil(articles.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const slice = articles.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  );

  if (!slug) {
    return null;
  }

  return (
    <AppShell>
      <div className="space-y-8">
        <Breadcrumbs
          items={[{ label: category?.name ?? "القسم" }]}
        />

        <header className="space-y-2">
          <h1 className="text-3xl font-extrabold text-ink sm:text-4xl">
            {category?.name ?? "قسم"}
          </h1>
          <p className="text-ink-muted">
            {articles.length} مقال{articles.length !== 1 ? "" : ""} في هذا القسم
          </p>
        </header>

        {isPending ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="h-72 animate-pulse rounded-xl bg-slate-200/80"
              />
            ))}
          </div>
        ) : (
          <>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {slice.map((a) => (
                <NewsCard key={a.id} article={a} />
              ))}
            </div>
            <Pagination
              page={currentPage}
              totalPages={totalPages}
              onPageChange={setPage}
            />
          </>
        )}
      </div>
    </AppShell>
  );
}
