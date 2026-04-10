import { Link } from "react-router-dom";
import { OptimizedImage } from "@/components/ui/OptimizedImage";
import { CategoryBadge } from "@/components/news/CategoryBadge";
import { ROUTES } from "@/constants/routes";
import { formatDate } from "@/lib/format";
import type { Article } from "@/types";

type NewsCardFeaturedProps = {
  article: Article;
};

export function NewsCardFeatured({ article }: NewsCardFeaturedProps) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-slate-100 bg-slate-900 text-white shadow-lg">
      <div className="absolute inset-0">
        <OptimizedImage
          src={article.coverImageUrl}
          alt=""
          className="opacity-55"
          rounded="none"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/55 to-slate-950/10" />
      </div>
      <Link
        to={ROUTES.article(article.slug)}
        className="relative flex min-h-[320px] flex-col justify-end p-6 sm:min-h-[380px] sm:p-8"
      >
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <CategoryBadge category={article.category} onDark />
            <time
              dateTime={article.publishedAt}
              className="text-xs font-semibold text-white/80"
            >
              {formatDate(article.publishedAt)}
            </time>
          </div>
          <h2 className="text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl">
            {article.title}
          </h2>
          <p className="max-w-2xl text-sm leading-relaxed text-white/85 sm:text-base">
            {article.excerpt}
          </p>
        </div>
      </Link>
    </article>
  );
}
