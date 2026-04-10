import { Link } from "react-router-dom";
import { Container } from "@/components/ui/Container";
import { ROUTES } from "@/constants/routes";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <Container className="py-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-lg font-extrabold text-ink">
              بوابة<span className="text-brand">الأخبار</span>
            </p>
            <p className="mt-1 max-w-md text-sm text-ink-muted">
              منصة تجريبية قابلة للتوسع — هيكل واجهات جاهز للربط بـ API حقيقي.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 text-sm font-semibold text-ink-muted">
            <Link to={ROUTES.home} className="hover:text-brand">
              الرئيسية
            </Link>
            <a href="#" className="hover:text-brand">
              من نحن
            </a>
            <a href="#" className="hover:text-brand">
              سياسة الخصوصية
            </a>
          </div>
        </div>
        <p className="mt-8 border-t border-slate-100 pt-6 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} بوابة الأخبار. جميع الحقوق محفوظة.
        </p>
      </Container>
    </footer>
  );
}
