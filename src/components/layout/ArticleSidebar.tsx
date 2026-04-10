import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/Card";
import { NewsCardCompact } from "@/components/news/NewsCardCompact";
import { queryKeys } from "@/constants/queryKeys";
import { ROUTES } from "@/constants/routes";
import {
  fetchArticles,
  fetchCategories,
  getTrendingArticles,
} from "@/services/articles";

export function ArticleSidebar() {
  const { data: articles = [] } = useQuery({
    queryKey: queryKeys.articles.list({ scope: "sidebar" }),
    queryFn: fetchArticles,
  });

  const { data: categories = [] } = useQuery({
    queryKey: queryKeys.categories.all,
    queryFn: fetchCategories,
  });

  const trending = getTrendingArticles(articles).slice(0, 3);

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="space-y-3">
          <h2 className="text-base font-extrabold text-ink">تصفح الأقسام</h2>
          <ul className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <li key={c.id}>
                <Link
                  to={ROUTES.category(c.slug)}
                  className="inline-flex rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-bold text-ink-muted transition hover:border-brand/40 hover:text-brand"
                >
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between gap-2">
            <h2 className="text-base font-extrabold text-ink">لمحة سريعة</h2>
            <Link
              to={ROUTES.home}
              className="text-xs font-bold text-brand hover:underline"
            >
              الرئيسية
            </Link>
          </div>
          <ul className="space-y-3">
            {trending.map((a) => (
              <li key={a.id}>
                <NewsCardCompact article={a} />
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
