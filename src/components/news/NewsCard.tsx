import { Link } from "react-router-dom";
import { OptimizedImage } from "@/components/ui/OptimizedImage";
import { CategoryBadge } from "@/components/news/CategoryBadge";
import { ROUTES } from "@/constants/routes";
import { formatDate } from "@/lib/format";
import { cn } from "@/lib/cn";
import type { Article } from "@/types";

type NewsCardProps = {
  article: Article;
  className?: string;
};

export function NewsCard({ article, className }: NewsCardProps) {
  return (
    <article
      className={cn(
        "group overflow-hidden rounded-xl border border-slate-100 bg-white shadow-card transition hover:-translate-y-0.5 hover:shadow-md",
        className
      )}
    >
      <Link to={ROUTES.article(article.slug)} className="block">
        <div className="aspect-[16/10] overflow-hidden bg-slate-100">
          <OptimizedImage
            src={article.coverImageUrl}
            alt=""
            className="transition duration-300 group-hover:scale-[1.02]"
            rounded="none"
          />
        </div>
        <div className="space-y-2 p-4">
          <div className="flex flex-wrap items-center gap-2">
            <CategoryBadge category={article.category} />
            <time
              dateTime={article.publishedAt}
              className="text-xs font-medium text-ink-muted"
            >
              {formatDate(article.publishedAt)}
            </time>
          </div>
          <h3 className="text-base font-extrabold leading-snug text-ink group-hover:text-brand">
            {article.title}
          </h3>
          <p className="line-clamp-2 text-sm leading-relaxed text-ink-muted">
            {article.excerpt}
          </p>
        </div>
      </Link>
    </article>
  );
}
