import { NavLink } from "react-router-dom";
import { ROUTES } from "@/constants/routes";
import { cn } from "@/lib/cn";
import type { Category } from "@/types";

type MainNavProps = {
  categories: Category[];
};

export function MainNav({ categories }: MainNavProps) {
  return (
    <nav
      className="flex flex-wrap items-center gap-1 border-t border-slate-100 pt-3 text-sm font-semibold"
      aria-label="أقسام الموقع"
    >
      <NavLink
        to={ROUTES.home}
        className={({ isActive }) =>
          cn(
            "rounded-md px-2 py-1.5 transition-colors hover:bg-slate-100",
            isActive ? "text-brand" : "text-ink-muted"
          )
        }
        end
      >
        الرئيسية
      </NavLink>
      {categories.map((c) => (
        <NavLink
          key={c.id}
          to={ROUTES.category(c.slug)}
          className={({ isActive }) =>
            cn(
              "rounded-md px-2 py-1.5 transition-colors hover:bg-slate-100",
              isActive ? "text-brand" : "text-ink-muted"
            )
          }
        >
          {c.name}
        </NavLink>
      ))}
    </nav>
  );
}
