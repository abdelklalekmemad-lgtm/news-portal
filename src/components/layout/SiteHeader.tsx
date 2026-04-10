import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Container } from "@/components/ui/Container";
import { MainNav } from "@/components/layout/MainNav";
import { SearchBar } from "@/components/layout/SearchBar";
import { queryKeys } from "@/constants/queryKeys";
import { ROUTES } from "@/constants/routes";
import { fetchCategories } from "@/services/articles";

export function SiteHeader() {
  const { data: categories = [] } = useQuery({
    queryKey: queryKeys.categories.all,
    queryFn: fetchCategories,
  });

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/95 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <Container className="py-4">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap items-center gap-4">
            <Link
              to={ROUTES.home}
              className="text-xl font-extrabold tracking-tight text-ink"
            >
              بوابة<span className="text-brand">الأخبار</span>
            </Link>
            <p className="hidden text-sm text-ink-muted sm:block">
              تغطية يومية موثوقة
            </p>
          </div>
          <div className="lg:max-w-md lg:flex-1 lg:justify-end lg:flex">
            <SearchBar />
          </div>
        </div>
        <MainNav categories={categories} />
      </Container>
    </header>
  );
}
