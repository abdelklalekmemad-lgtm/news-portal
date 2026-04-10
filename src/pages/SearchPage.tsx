import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { AppShell } from "@/components/layout/AppShell";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { NewsCard } from "@/components/news/NewsCard";
import { Input } from "@/components/ui/Input";
import { queryKeys } from "@/constants/queryKeys";
import { fetchArticles } from "@/services/articles";

export function SearchPage() {
  const [params, setParams] = useSearchParams();
  const q = (params.get("q") ?? "").trim();

  const { data: articles = [], isPending } = useQuery({
    queryKey: queryKeys.articles.list({ search: q }),
    queryFn: fetchArticles,
  });

  const results = useMemo(() => {
    if (!q) return [];
    const lower = q.toLowerCase();
    return articles.filter(
      (a) =>
        a.title.toLowerCase().includes(lower) ||
        a.excerpt.toLowerCase().includes(lower)
    );
  }, [articles, q]);

  return (
    <AppShell>
      <div className="space-y-8">
        <Breadcrumbs items={[{ label: "بحث" }]} />

        <header className="space-y-4">
          <h1 className="text-3xl font-extrabold text-ink">بحث</h1>
          <form
            className="max-w-xl"
            onSubmit={(e) => {
              e.preventDefault();
              const fd = new FormData(e.currentTarget);
              const next = String(fd.get("q") ?? "").trim();
              setParams(next ? { q: next } : {});
            }}
          >
            <Input
              name="q"
              defaultValue={q}
              placeholder="اكتب كلمة البحث..."
              aria-label="نص البحث"
            />
          </form>
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
            <p className="text-sm font-semibold text-ink-muted">
              {q
                ? `نتائج البحث: ${results.length}`
                : "أدخل كلمة للبحث في العناوين والمقدمات."}
            </p>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {results.map((a) => (
                <NewsCard key={a.id} article={a} />
              ))}
            </div>
          </>
        )}
      </div>
    </AppShell>
  );
}
