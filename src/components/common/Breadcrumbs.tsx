import { Link } from "react-router-dom";
import { ROUTES } from "@/constants/routes";
import { cn } from "@/lib/cn";

export type Crumb = { label: string; to?: string };

type BreadcrumbsProps = {
  items: Crumb[];
  className?: string;
};

export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  return (
    <nav aria-label="مسار التصفح" className={cn("text-sm", className)}>
      <ol className="flex flex-wrap items-center gap-2 text-ink-muted">
        <li>
          <Link to={ROUTES.home} className="font-semibold hover:text-brand">
            الرئيسية
          </Link>
        </li>
        {items.map((item, i) => (
          <li key={`${item.label}-${i}`} className="flex items-center gap-2">
            <span className="text-slate-300" aria-hidden>
              /
            </span>
            {item.to ? (
              <Link to={item.to} className="font-semibold hover:text-brand">
                {item.label}
              </Link>
            ) : (
              <span className="font-bold text-ink">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
