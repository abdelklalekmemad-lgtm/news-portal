import { CategoryBadge } from "@/components/news/CategoryBadge";
import { formatDate } from "@/lib/format";
import type { Article } from "@/types";

type ArticleHeaderProps = {
  article: Article;
};

export function ArticleHeader({ article }: ArticleHeaderProps) {
  return (
    <header className="space-y-4">
      <div className="flex flex-wrap items-center gap-3">
        <CategoryBadge category={article.category} />
        <time
          dateTime={article.publishedAt}
          className="text-sm font-semibold text-ink-muted"
        >
          {formatDate(article.publishedAt)}
        </time>
        {article.readMinutes ? (
          <span className="text-sm font-semibold text-ink-muted">
            قراءة {article.readMinutes} د
          </span>
        ) : null}
      </div>
      <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl">
        {article.title}
      </h1>
      <p className="text-lg leading-relaxed text-ink-muted">{article.excerpt}</p>
      <div className="flex flex-wrap items-center gap-2 text-sm">
        <span className="font-bold text-ink">بقلم:</span>
        <span className="font-semibold text-ink-muted">{article.author.name}</span>
      </div>
    </header>
  );
}
