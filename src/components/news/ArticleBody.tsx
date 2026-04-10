import type { Article } from "@/types";

type ArticleBodyProps = {
  article: Article;
};

export function ArticleBody({ article }: ArticleBodyProps) {
  const html = article.bodyHtml ?? `<p>${article.excerpt}</p>`;

  return (
    <div
      className="article-body max-w-none space-y-4 text-base leading-relaxed text-ink [&_h2]:mt-8 [&_h2]:text-xl [&_h2]:font-extrabold [&_li]:mr-5 [&_li]:list-disc [&_p]:text-ink [&_ul]:space-y-2"
      // eslint-disable-next-line react/no-danger -- محتوى من مصدر موثوق (CMS/API) لاحقاً مع sanitization
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
