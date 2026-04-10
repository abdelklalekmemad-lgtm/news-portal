import { Link } from "react-router-dom";
import { OptimizedImage } from "@/components/ui/OptimizedImage";
import { ROUTES } from "@/constants/routes";
import type { Article } from "@/types";

type NewsCardCompactProps = {
  article: Article;
};

export function NewsCardCompact({ article }: NewsCardCompactProps) {
  return (
    <Link
      to={ROUTES.article(article.slug)}
      className="group flex gap-3 rounded-lg p-1 transition hover:bg-slate-50"
    >
      <div className="h-16 w-24 shrink-0 overflow-hidden rounded-md bg-slate-100">
        <OptimizedImage
          src={article.coverImageUrl}
          alt=""
          className="h-16 w-24 object-cover"
          rounded="none"
        />
      </div>
      <div className="min-w-0 flex-1">
        <p className="line-clamp-2 text-sm font-bold leading-snug text-ink group-hover:text-brand">
          {article.title}
        </p>
        <p className="mt-1 text-xs font-semibold text-brand">{article.category.name}</p>
      </div>
    </Link>
  );
}
