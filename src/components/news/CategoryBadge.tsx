import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/Badge";
import { ROUTES } from "@/constants/routes";
import type { Article } from "@/types";

type CategoryBadgeProps = {
  category: Article["category"];
  /** مظهر للخلفيات الداكنة */
  onDark?: boolean;
};

export function CategoryBadge({ category, onDark }: CategoryBadgeProps) {
  return (
    <Link to={ROUTES.category(category.slug)} className="inline-flex">
      <Badge tone={onDark ? "dark" : "brand"}>
        {category.name}
      </Badge>
    </Link>
  );
}
