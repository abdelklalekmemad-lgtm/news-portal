import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

type PaginationProps = {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
};

export function Pagination({
  page,
  totalPages,
  onPageChange,
  className,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  const prev = Math.max(1, page - 1);
  const next = Math.min(totalPages, page + 1);

  return (
    <div
      className={cn("flex items-center justify-center gap-3", className)}
      role="navigation"
      aria-label="ترقيم الصفحات"
    >
      <Button
        type="button"
        variant="outline"
        size="sm"
        disabled={page <= 1}
        onClick={() => onPageChange(prev)}
      >
        السابق
      </Button>
      <p className="text-sm font-bold text-ink-muted">
        صفحة {page} من {totalPages}
      </p>
      <Button
        type="button"
        variant="outline"
        size="sm"
        disabled={page >= totalPages}
        onClick={() => onPageChange(next)}
      >
        التالي
      </Button>
    </div>
  );
}
